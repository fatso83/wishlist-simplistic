Template.header.displayName = () =>  {
	return displayName(Meteor.user());
};

Template.header.events({

	'click #logoutButton' : () =>  {
		Meteor.logout((err) =>  {
			if (err) {
				console.error('error', arguments);
			}
			else {
				console.log('logged out', arguments);
			}
		});
	}
});

var displayName = (user) =>  {
	return user.profile.name || user.profile.email;
};

