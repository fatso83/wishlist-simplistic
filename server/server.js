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

	console.log('User object returned', user);

	return user;
});

// never seen this work ...
Accounts.onLogin(function(logonDetails){

//	var u = Meteor.Users.findOne({'_id' : logonDetails.user._id });
	var u = logonDetails.user;
	if(u.visited) {
		Session.set('visited', true);
	} else {
		// db undefined
//		db.users.update(
//			{'_id' : u._id },
//			{ visited : true }
//		);
		Session.set('visited', false);
	}

});


// funker ikke - tell me why?
//Meteor.publish("userdir", function () {
//	return Meteor.users.userBuys2({}, {fields: {emails: 1, title: 1}});
//});

configureFacebook = function(config) {
	console.log('Setting up facebook login');
	// first, remove configuration entry in case service is already configured
	ServiceConfiguration.configurations.remove({
		service: "facebook"
	});
	ServiceConfiguration.configurations.insert({
		service: "facebook",
//		clientId: config.clientId,
		appId: config.clientId,
		secret: config.secret
	});
};

// set the settings object with --settings private/settings-local.json
var facebookConfig = Meteor.settings.facebook;
if(facebookConfig) {
	console.log('Got settings for facebook', facebookConfig)
	configureFacebook(facebookConfig);
}
