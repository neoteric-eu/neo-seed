define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description
	 * @constructor UserAPI
	 * @method UserAPI
	 * @param User
	 * @param $rootScope
	 * @param $log
	 * @param BaseAPI
	 * @param ipCookie
	 * @return {*} api
	 */
	function UserAPI(BaseAPI, User, $log, $rootScope, ipCookie) {

		var api = new BaseAPI(User);

		api.login = function (loginData) {
			return User
				// @TODO Find way to remove building model before calling
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {
					// Make user, customers accessible globally
					$rootScope.user = user;

					ipCookie('token', user.$metadata.token);
					return user;
				})
				.catch(function (response) {
					$log.error('Could not login the user', response);
				});
		};

		api.authInfo = function authInfo() {
			return User
				// @TODO Find way to remove building model before calling
				.$build()
				.$authInfo()
				.$asPromise()
				.then(function (user) {
					// Make user, customers accessible globally
					$rootScope.user = user;

					return user;
				})
				.catch(function (response) {
					$log.error('Could not login the user', response);
				});
		};

		api.logout = function (user) {
			return user
				.$logout()
				.$asPromise()
				.catch(function (response) {
					$log.error('Could not logout the user', response);
				});
		};
		return api;
	}

	module.registerService('UserAPI', UserAPI);
});


