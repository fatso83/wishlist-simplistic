Template.login.events({

	'click #loginPersona' : function () {
		ga('send', {
				'hitType'       : 'event',          // Required.
				'eventCategory' : 'login',   // Required.
				'eventAction'   : 'click',      // Required.
				'eventLabel'    : '#loginPersona'
			},
			{'page' : '/login'}
		);

		Meteor.loginWithPersona(function (err) {
			if (err) {
				console.error('error', err);
				ga('send', {
						'hitType'       : 'event',          // Required.
						'eventCategory' : 'login',   // Required.
						'eventAction'   : 'error',      // Required.
						'eventLabel'    : '#loginPersona'
					},
					{'page' : '/login' }
				);
			}
			else {
				ga('send', {
						'hitType'       : 'event',          // Required.
						'eventCategory' : 'login',   // Required.
						'eventAction'   : 'success',      // Required.
						'eventLabel'    : '#loginPersona'
					},
					{'page' : '/login' }
				);
			}
		});
	},

	'click #loginFacebook' : function () {
		ga('send', {
				'hitType'       : 'event',          // Required.
				'eventCategory' : 'login',   // Required.
				'eventAction'   : 'click',      // Required.
				'eventLabel'    : '#loginFacebook'
			},
			{'page' : '/login' }
		);
		Meteor.loginWithFacebook(function (err) {
			if (err) {
				console.error('error facebook', arguments);
				ga('send', {
						'hitType'       : 'event',          // Required.
						'eventCategory' : 'login',   // Required.
						'eventAction'   : 'error',      // Required.
						'eventLabel'    : '#loginFacebook'
					},
					{'page' : '/login' }
				);
			}
			else {
				ga('send', {
						'hitType'       : 'event',          // Required.
						'eventCategory' : 'login',   // Required.
						'eventAction'   : 'success',      // Required.
						'eventLabel'    : '#loginFacebook'
					},
					{'page' : '/login' }
				);
			}
		});
	}
});
