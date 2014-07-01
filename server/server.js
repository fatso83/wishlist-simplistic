// finds fields on the fields within 'user.services'
var findField = function(createdUser, fieldName) {
	var services = createdUser.services;

	return Object.keys(services)
		.map(function(sName) { return services[sName][fieldName]})
		.filter(function(val) { return val; })[0];
};

Accounts.onCreateUser(function (options, user) {
	user.profile = {};
	user.profile.email = findField(user, 'email');
	user.profile.name = findField(user, 'name');

	user.profile.firstName = findField(user, 'first_name') ;
	user.profile.lastName = findField(user, 'last_name') ;

	user.username = user.profile.name|| user.profile.email;
	console.log('User object returned', user);

	return user;
});


// funker ikke - tell me why?
//Meteor.publish("userdir", function () {
//	return Meteor.users.find({}, {fields: {emails: 1, title: 1}});
//});

