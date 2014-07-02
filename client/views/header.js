Template.header.userString = function() {
	var u = Meteor.user();
	return (u.profile && u.profile.name)
		|| (u.emails && u.emails[0].address)
		|| "your_email";
};

Template.header.events({

	'click #logoutButton' : function () {
		Meteor.logout(function (err) {
			if (err) {
				console.error('error', arguments);
			}
			else {
				console.log('logged out', arguments);
			}
		});
	}
});
