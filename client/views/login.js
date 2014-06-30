Template.login.events({

	'click #loginPersona' : function () {
		Meteor.loginWithPersona(function (err) {
			if (err) {
				console.error('error', err);
			}
			else {
				console.log('logged in persona', arguments);
			}
		});
	},

	'click #loginFacebook' : function () {
		Meteor.loginWithFacebook(function (err) {
			if (err) {
				console.error('error facebook', arguments);
			}
			else {
				console.log('logged in facebook', arguments);
			}
		});
	}
});
