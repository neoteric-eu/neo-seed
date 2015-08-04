define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor
	 * @implements {seed.BaseAPI}
	 * @memberOf seed.auth
	 *
	 * @param $log {Object} Logging service
	 * @param $cookies {Function} Cookie service
	 * @param $rootScope {Object} Global scope provider
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param User {Object} Model factory
	 * @return {Function} Instantiated service
	 */
	var UserAPI = function ($log, $cookies, $rootScope, BaseAPI, User) {

		$log = $log.getInstance('seed.auth.UserAPI');
		$log.debug('Initiated service');

		var api = new BaseAPI(User);

		api.login = function (loginData) {
			return User
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {

					$log.debug('Set user object available globally');
					$rootScope.user = user;
					$cookies.putObject('token', user.$metadata.token);

					$log.debug('Successfully logged user in');

					return user;
				})
				.catch(function () {
					$log.error('Could not login the user');
				});
		};

		api.authInfo = function authInfo() {
			return User
				.$build()
				.$authInfo()
				.$asPromise()
				.then(function (user) {
					$log.debug('Set user object available globally');
					$rootScope.user = user;

					$log.debug('Successfully verified user session');

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


