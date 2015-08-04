define(['apps/demo/auth/module'], function (module) {
	'use strict';
	return module.registerFactory('UserDemo', function ($http, $q) {
		var dfd = $q.defer();

		var UserModel = {
			initialized: dfd.promise,
			username: undefined,
			picture: undefined
		};
		$http.get('apps/demo/api/user.json').then(function (response) {
			UserModel.username = response.data.username;
			UserModel.picture = response.data.picture;
			dfd.resolve(UserModel);
		});

		return UserModel;
	});

});
