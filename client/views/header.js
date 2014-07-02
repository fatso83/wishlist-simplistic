Template.header.displayName = function() {
	return displayName(Meteor.user());
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

displayName = function (user) {
	return user.profile.name || user.profile.email;
};

