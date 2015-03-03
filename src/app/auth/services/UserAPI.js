define(['auth/module'], function (module) {
	'use strict';

	/**
	 * Description
	 * @constructor UserAPI
	 * @method UserAPI
	 * @param User
	 * @param $rootScope
	 * @param $rootScope
	 * @param ipCookie
	 * @param setDefaultsHeaders
	 * @param Permission
	 * @param $log
	 * @param BaseAPI
	 * @return {Object} api
	 */
	function UserAPI(BaseAPI, User, $log, $rootScope, ipCookie,
									 setDefaultsHeaders, Permission) {

		var api = new BaseAPI(User);

		/**
		 * Description
		 * @method login
		 * @param loginData CallExpression
		 */
		api.login = function login(loginData) {
			return User
				.$build(loginData)
				.$login()
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

		/**
		 * Description
		 * @method authInfo CallExpression
		 */
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

		/**
		 * Description
		 * @method logout CallExpression
		 */
		api.logout = function logout() {
			var self = this;
			return User
				// @TODO Find way to remove building model before calling
				.$build()
				.$logout()
				.$asPromise()
				.then(function () {
					self.clearSession();
				})
				.catch(function (response) {
					$log.error('Could not logout the user', response);
				});
		};

		/**
		 * Description
		 * @method clearSession
		 */
		api.clearSession = function clearSession() {
			setDefaultsHeaders.clearHeaders();
			Permission.clearFeautres();

			ipCookie.remove('token');
			ipCookie.remove('customerId');
		};

		return api;
	}

	module.registerService('UserAPI', UserAPI);
});


