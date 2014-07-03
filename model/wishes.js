// expose the variable on the global scope to make it globally
// available (don't "var" it)

Wish = function (doc) {
	_.extend(this, doc);
	if(!this.images.length) {
		this.images.push('http://www.eliaasen.no/filer/produkter/bilde_mangler.jpg');
	}
};

Wish.prototype.completed = function() {
	return this.remaining() == 0;
};

Wish.prototype.class_completed = function() {
	return this.completed()? 'wish-completed' : '';
};

Wish.prototype.class_show = function() {
	return this.index === 0? 'in' : '';
};

Wish.prototype.remaining = function () {
	return remaining(this)
};

Wish.prototype.totalBought = function () {
	return totalBought(this)
};

Wish.prototype.hasPurchased = function () {
	return this.userBuyCount() > 0;
};

Wish.prototype.userBuyCount = function () {
	return userBuyCount(this);
};

Wish.prototype.firstImage= function () {
	return this.images[0];
};

Wishes = new Meteor.Collection('wishes', {
	transform : function (doc) {
		return new Wish(doc);
	}
});

Wishes.allow({
	insert : function (userId, party) {
		return false; // no cowboy inserts -- use createWish method
	},
	update : function (userId, wish, fields, modifier) {
		if (fields.length === 0) {
			return false;
		}

		if (_.difference(fields, ['buys']).length > 0) {
			return false;
		}

		return userId === wish.owner;
	},
	remove : function (userId, wish) {
		// You can only remove parties that you created and nobody is going to.
		return wish.owner === userId && totalBought(wish) === 0;
	}
});

NonEmptyString = Match.Where(function (x) {
	check(x, String);
	return x.length !== 0;
});

Url = Match.Where(function (x) {
	return !!x.match(/https?:\/\/.*/);
});

dummyØnske = { description : 'et ønske om en god jul', title : 'En riktig god jul', price : 0, images : [], amount_wanted : 1, url : 'http://www.hw.no' };

buy = function (wishId, callback) {
	Meteor.call('buy_one', wishId, function(err) {
		err && console.log('Fikk ikke lov til å kjøpe', err);
		callback(err);
	});
};

regret = function (wishId, callback) {
	Meteor.call('regret_one', wishId, function(err){
		err && console.log('Fikk ikke lov til å fjerne', err);
		callback(err);
	});
};

/*
* CRUD methods that are running on the server
*
* These are used by running Meteor.call('methodName')
* If you call them on the client the act as though they are
* synchronous - aka slow, just waiting for the server to return.
*
* If you want snappy performance you need to create stub methods
* on the client. That means there has to be a client
* definition of Meteor.methods({...}) with dummy methods that
* immediately returns some value to accompany the server version.
*
* See discussion here for more info:
* http://stackoverflow.com/questions/12231712/when-to-use-meteor-methods-and-utilizing-stubs/13145432#13145432
*
*/
//if (Meteor.isServer) {
Meteor.methods({

	buy_one : function (wishId) {
		var wish;
		var userBuys;

		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in");
		}

		wish = Wishes.findOne(wishId);
		if (!wish) {
			throw new Meteor.Error(413, "Invalid wish id");
		}

		if ((wish.remaining() - 1) < 0) {
			throw new Meteor.Error(413, "More bought than available");
		}

		userBuys = wish.userBuyCount();
		if (!userBuys) {
			Wishes.update(
				{ _id : wishId },
				{ $push : { 'buys' : {user : this.userId, bought : 0} } }
			);
		}

		// increment number of bought items by 1
		Wishes.update(
			{ _id : wishId, 'buys.user' : this.userId  },
			{ $inc : { 'buys.$.bought' : 1}
			})

	},

	regret_one : function (wishId) {
		var wish, boughtByUser;

		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in");
		}

		wish = Wishes.findOne(wishId);
		if (!wish) {
			throw new Meteor.Error(413, "Invalid wish id");
		}

		boughtByUser = wish.userBuyCount();
		if (!boughtByUser) {
			Wishes.update(
				{ _id : wishId },
				{ $push : { 'buys' : {user : this.userId, bought : 0} } }
			);
		}

		if ((boughtByUser - 1) < 0) {
			throw new Meteor.Error(413, "Cannot subtract less than zero");
		}

		// increment number of bought items by 1
		Wishes.update(
			{ _id : wishId, 'buys.user' : this.userId  },
			{ $inc : { 'buys.$.bought' : -1}
			})

	},

	create_wish : function (options) {
		check(options, {
			_id           : Match.Optional(NonEmptyString),
			title         : NonEmptyString,
			description   : NonEmptyString,
			price         : Number,
			url           : Match.Optional(Url),
			amount_wanted : Match.Optional(Number),
			images        : Array
		});

		if (options.title.length > 25) {
			throw new Meteor.Error(413, "Title too long");
		}

		if (options.description.length > 400) {
			throw new Meteor.Error(413, "Description too long");
		}

		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in");
		}

		var email = Meteor.user().profile.email;
		if (!email.match(/carlerik@gmail.com|ida\.?angel\.?weum@gmail.com/)) {
			throw new Meteor.Error(400, "You must be the groom or bride");
		}

		var id = options._id || Random.id();
		Wishes.insert({
			_id           : id,
			owner         : this.userId,
			title         : options.title,
			description   : options.description,
			price         : options.price,
			url           : options.url || '',
			images        : options.images.slice(0),
			amount_wanted : options.amount_wanted || 1,
			buys          : []
		});

		return id;
	}
});
//}

if (Meteor.isClient) {

}

// helpers
var remaining = function (wish) {
	var sum = totalBought(wish);
	return wish.amount_wanted - sum;
};

var totalBought = function (wish) {
	return _.reduce(wish.buys, function (memo, transaction) { return memo + transaction.bought; }, 0);
};

createWish = function (options) {
	var id = Random.id();
	Meteor.call('create_wish', _.extend({ _id : id }, options));
	return id;
};

userBuyCount = function (wish) {
	var data =_.find(wish.buys, function (b) { return b.user === Meteor.userId() });
	return data? data.bought : 0;
};
