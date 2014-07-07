Template.login.events({

	'click #loginPersona' : function () {
		ga('send', {
			'hitType': 'event',          // Required.
			'eventCategory': 'login',   // Required.
			'eventAction': 'click',      // Required.
			'eventLabel': '#loginPersona'
		});

		Meteor.loginWithPersona(function (err) {
			if (err) {
				console.error('error', err);
				ga('send', {
					'hitType': 'event',          // Required.
					'eventCategory': 'login',   // Required.
					'eventAction': 'error',      // Required.
					'eventLabel': '#loginPersona'
				});
			}
			else {
				ga('send', {
					'hitType': 'event',          // Required.
					'eventCategory': 'login',   // Required.
					'eventAction': 'success',      // Required.
					'eventLabel': '#loginPersona'
				});
			}
		});
	},

	'click #loginFacebook' : function () {
		ga('send', {
			'hitType': 'event',          // Required.
			'eventCategory': 'login',   // Required.
			'eventAction': 'click',      // Required.
			'eventLabel': '#loginFacebook'
		});
		Meteor.loginWithFacebook(function (err) {
			if (err) {
				console.error('error facebook', arguments);
				ga('send', {
					'hitType': 'event',          // Required.
					'eventCategory': 'login',   // Required.
					'eventAction': 'error',      // Required.
					'eventLabel': '#loginFacebook'
				});
			}
			else {
				ga('send', {
					'hitType': 'event',          // Required.
					'eventCategory': 'login',   // Required.
					'eventAction': 'success',      // Required.
					'eventLabel': '#loginFacebook'
				});
			}
		});
	}
});
