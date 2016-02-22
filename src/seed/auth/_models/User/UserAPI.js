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
	var UserAPI = function ($log, $cookies, $rootScope, BaseAPI, User, $q) {

		$log = $log.getInstance('seed.auth.UserAPI');
		$log.debug('Initiated service');

		var api = new BaseAPI(User);

		api.login = function (loginData) {
			return User
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully logged user in');
					return user;
				})
				.catch(function (reason) {
					$log.error('Could not login the user');
					return $q.reject(reason);
				});
		};

		api.register = function (user) {
			return user
				.$register()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully registered new user');
					return user;
				})
				.catch(function (reason) {
					$log.error('Error registering new user');
					return $q.reject(reason);
				});
		};

		api.authInfo = function authInfo() {
			return User
				.$build()
				.$authInfo()
				.$asPromise()
				.then(function (user) {
					$log.debug('Successfully verified user session');
					return user;
				})
				.catch(function (reason) {
					$log.error('Use session experienced');
					return $q.reject(reason);
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
					return $q.reject(response);
				});
		};

		api.resetPasswordInit = function (user) {
			return user
				.$passwordResetInit()
				.$asPromise()
				.then(function () {
					$log.debug('Sent email with password');
				})
				.catch(function (response) {
					$log.error('Error sending email with password reset', response);
					return $q.reject(response);
				});
		};

		api.resetPasswordFinish = function (user) {
			return user
				.$passwordResetFinish()
				.$asPromise()
				.then(function () {
					$log.debug('Changed user password');
				})
				.catch(function (response) {
					$log.error('Error changing user password', response);
					return $q.reject(response);
				});
		};

		return api;
	};

	module.service('UserAPI', UserAPI);
});


