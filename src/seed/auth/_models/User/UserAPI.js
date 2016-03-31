define(['seed/auth/module'], function (module) {
		'use strict';

		/**
		 * Interface for REST communication with server
		 * @constructor
		 * @implements {seed.helpers.BaseAPI}
		 * @memberOf seed.auth
		 *
		 * @param $log {Object} Logging service
		 * @param $q
		 * @param $http
		 * @param BaseAPI {Function} Base interface for REST communication with server
		 * @param User {Object} Model factory
		 * @param appConf
		 * @return {Function} Instantiated service
		 */
		var UserAPI = function ($log, $q, $http, BaseAPI, User, appConf) {

			$log = $log.getInstance('seed.auth.UserAPI');
			$log.debug('Initiated service');

			var api = new BaseAPI(User);

			api.login = login;
			api.logout = logout;
			api.register = register;
			api.authInfo = authInfo;
			api.resetPasswordInit = resetPasswordInit;
			api.resetPasswordFinish = resetPasswordFinish;

			function login(loginData) {
				return $http.get({
						url: api.model.$url() + '/login',
						data: {
							login: loginData.login,
							password: loginData.password
						}
					})
					.then(function (user) {
						$log.debug('Successfully logged in user');

						return User.$decode(user);
					})
					.catch(function (reason) {
						$log.error('Could not login the user');

						return $q.reject(reason);
					});
			}

			function register(user) {
				return $http.post({
						url: appConf.environmentSettings.apiUrl + '/registration',
						data: user
					})
					.then(function (user) {
						$log.debug('Successfully registered new user');

						return User.$decode(user);
					})
					.catch(function (reason) {
						$log.error('Error registering new user');

						return $q.reject(reason);
					});
			}

			function authInfo() {
				return $http.post({
						url: this.$scope.$url() + '/authInfo',
						cache: true,
						data: {
							token: $cookies.getObject('token')
						}
					})
					.then(function (user) {
						$log.debug('Successfully verified user session');

						return User.$decode(user);
					})
					.catch(function (reason) {
						$log.error('Use session experienced');

						return $q.reject(reason);
					});
			}

			function logout(user) {
				return $http.post({
						url: user.$url() + '/logout'
					})
					.then(function () {
						$log.debug('Logged out user');
					})
					.catch(function (response) {
						$log.error('Could not logout the user', response);

						return $q.reject(response);
					});
			}

			function resetPasswordInit(user) {
				return $http.post({
						url: user.$url() + '/password/reset/init',
						data: {
							email: user.email
						}
					})
					.then(function () {
						$log.debug('Sent email with password');
					})
					.catch(function (response) {
						$log.error('Error sending email with password reset', response);

						return $q.reject(response);
					});
			}

			function resetPasswordFinish(user) {
				return $http.post({
						url: user.$url() + '/password/reset/finish',
						data: {
							token: user.token,
							newPassword: user.password
						}
					})
					.then(function () {
						$log.debug('Changed user password');
					})
					.catch(function (response) {
						$log.error('Error changing user password', response);

						return $q.reject(response);
					});
			}

			return api;
		};

		module.service('UserAPI', UserAPI);
	}
);


