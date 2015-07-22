define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param BaseAPI
	 * @param User
	 * @param $log
	 * @param $rootScope
	 * @param ipCookie
	 * @return {*}
	 * @constructor
	 */
	var UserAPI = function ($log, $rootScope, BaseAPI, User, ipCookie) {
		$log = $log.getInstance('seed.auth.models.UserAPI');

		var api = new BaseAPI(User);

		api.login = function (loginData) {
			$log.debug('Called "login" UserAPI method');

			// @TODO Find way to remove building model before calling
			return User
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {
					// Make user, customers accessible globally
					$log.debug('Set user object available globally');
					$rootScope.user = user;

					ipCookie('token', user.$metadata.token);
					return user;
				})
				.catch(function () {
					$log.error('Could not login the user');
				});
		};

		api.authInfo = function authInfo() {
			$log.debug('Called "authInfo" UserAPI method');

			// @TODO Find way to remove building model before calling
			return User
				.$build()
				.$authInfo()
				.$asPromise()
				.then(function (user) {
					$log.debug('Set user object available globally');
					$rootScope.user = user;

					return user;
				})
				.catch(function () {
					$log.error('Use session experienced');
				});
		};

		api.logout = function (user) {

			return user
				.$logout()
				.$asPromise()
				.then(function () {
					$log.debug('Logged out user');
				})
				.catch(function (response) {
					$log.error('Could not logout the user', response);
				});
		};

		return api;
	};

	module.service('UserAPI', UserAPI);
});


