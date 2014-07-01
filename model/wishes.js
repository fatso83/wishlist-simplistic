// expose the variable on the global scope to make it globally
// available (don't "var" it)

Wish = function(doc) {
	_.extend(this, doc);
};

Wish.prototype.remaining = function() {
	return remaining(this)
};

Wish.prototype.bought = function() {
	return bought(this)
};

Wishes = new Meteor.Collection('wishes', {
	transform : function(doc) {
		return new Wish(doc);
	}
});

Wishes.allow({
	insert : function (userId, party) {
		return false; // no cowboy inserts -- use createWish method
	},
	update : function (userId, wish, fields, modifier) {
		return userId === wish.owner;
	},
	remove : function (userId, wish) {
		// You can only remove parties that you created and nobody is going to.
		return wish.owner === userId && bought(wish) === 0;
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
buyItem = function () {

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

	buy_one: function (wishId) {
		var wish;

		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in");
		}

		wish = Wishes.findOne(wishId);
		if (!wish) {
			throw new Meteor.Error(413, "Invalid wish id");
		}

		if ((remaining(wish) - 1) < 0) {
			throw new Meteor.Error(413, "More bought than available");
		}

		Wishes.update(wishId, {
		} )

	},

	create_wish : function (options) {
		check(options, {
			_id           : Match.Optional(NonEmptyString),
			title         : NonEmptyString,
			description   : NonEmptyString,
			price         : Number,
			url           : Url,
			amount_wanted : Number,
			images        : Array
		});

		if (options.title.length > 100) {
			throw new Meteor.Error(413, "Title too long");
		}

		if (options.description.length > 1000) {
			throw new Meteor.Error(413, "Description too long");
		}

		if (!this.userId) {
			throw new Meteor.Error(403, "You must be logged in");
		}


		var id = options._id || Random.id();
		Wishes.insert({
			_id           : id,
			owner         : this.userId,
			title         : options.title,
			description   : options.description,
			url           : options.url,
			images        : options.images.slice(0),
			amount_wanted : options.amount_wanted,
			buys : []
		});

		return id;
	}
});
//}

if (Meteor.isClient) {

}

// helpers
var remaining = function (wish) {
	var sum = bought(wish);
	return wish.amount_wanted - sum;
};

var bought = function(wish) {
	return _.reduce(wish.buys, function (memo, transaction) { return memo + transaction.bought; }, 0);
};

createWish = function (options) {
	var id = Random.id();
	Meteor.call('create_wish', _.extend({ _id : id }, options));
	return id;
};

