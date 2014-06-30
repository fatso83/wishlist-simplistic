// finds fields on the fields within 'user.services'
var findField = function(createdUser, fieldName) {
	var services = createdUser.services;

	return Object.keys(services)
		.map(function(sName) { return services[sName][fieldName]})
		.filter(function(val) { return val; });
};

Accounts.onCreateUser(function (options, user) {
	user.profile = {};
	user.profile.email = findField(user, 'email')[0];
	user.profile.name = findField(user, 'name')[0];

	user.username = user.profile.name || user.profile.email;
	console.log('User object returned', user);

	return user;
});


// funker ikke - tell my why?
//Meteor.publish("userdir", function () {
//	return Meteor.users.find({}, {fields: {emails: 1, name: 1}});
//});

