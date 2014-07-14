Template.wish.events({
	'click button.regret'  : function (e, template) {
		e.preventDefault();

		var id = template.data._id;

		ga('send', {
				'hitType'       : 'event',          // Required.
				'eventCategory' : 'regret',   // Required.
				'eventAction'   : 'click',      // Required.
				'eventLabel'    : id + ' button.regret'
			},
			{'page' : '/list' }
		);

		regret(id, function (err) {
			if (err) {
				alert('Det oppstod en feil', 'danger');
			} else {
				alert('Lagret', 'success');
			}
		});

		// avoids a redirect to the top
		return false;
	},
	'click button.confirm' : function (e, template) {
		e.preventDefault();

		var id = template.data._id;
		var amount;

		if (template.data.isMulti()) {
			var s = $(template.firstNode).find('input').val();
			amount = parseInt(s, 10);

			if (isNaN(amount) || amount <= 0) {
				alert('Kan bare lagre positive verdier', 'warning');
				return;
			}
		} else {
			amount = 1;
		}

		ga('send', {
				'hitType'       : 'event',          // Required.
				'eventCategory' : 'confirm',   // Required.
				'eventAction'   : 'click',      // Required.
				'eventLabel'    : id + ' button.confirm'
			},
			{'page' : '/list' }
		);

		buy({ id : id, amount : amount }, function (err) {
			if (err) {
				alert('Det oppstod en feil', 'danger');
			} else {
				alert('Lagret', 'success');
			}
		});

		// avoids a redirect to the top
		return false;
	},

	// statistics on clicking the accordion
	'click li.wish > a' : function (e, template) {

		var id = template.data._id;

		ga('send', {
				'hitType'       : 'event',          // Required.
				'eventCategory' : 'title',   // Required.
				'eventAction'   : 'click',      // Required.
				'eventLabel'    : id + ' li.wish > a'
			},
			{'page' : '/list' }
		);
	},

	'click .product-url' : function(e, template) {
		return externalUrlClickHandler(e);
	}

});

function alert (msg, level) {
	setTimeout(function () {
		Session.set('alertMessage', msg);
		Session.set('alertLevel', level);
		setTimeout(function () {
			Session.set('alertMessage', null);
		}, 1500)
	}, 50);

}

Template.page.wishes = function () {
	return Wishes.find({ }, {
		sort      : [
			['price', 'asc'],
			["title"]
		],
		limit     : 100,
		transform : (function () {
			var index = 0;
			return function (doc) {
				var w = new Wish(doc);
				w.index = index;
				index++;

				return w;
			}
		})()
	});
};

Template.wish.attributes = function () {
	return {value : this.userBuyCount()}
};

Template.wish.disabled = function () {
	return this.userBuyCount() ? "disabled" : '';
};

Template.wish.alertMessage = function () {
	return !Session.equals("alertMessage", null);
}

Template.alert.alertMessage = function () {
	return Session.get('alertMessage');
};

Template.alert.alertLevel = function () {
	return Session.get('alertLevel');
};

