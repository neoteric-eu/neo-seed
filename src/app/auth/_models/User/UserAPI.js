define(['../../module'], function (module) {
	'use strict';

	/**
	 * Description
	 * @constructor UserAPI
	 * @method UserAPI
	 * @param User
	 * @param $rootScope
	 * @param $rootScope
	 * @param setDefaultsHeaders
	 * @param Permission
	 * @param $log
	 * @param BaseAPI
	 * @param localStorageService
	 * @return {Object} api
	 */
	function UserAPI(BaseAPI, User, $log, $rootScope,
	                 setDefaultsHeaders, Permission, localStorageService) {

		var api = new BaseAPI(User);

		/**
		 * Description
		 * @method login
		 * @param loginData CallExpression
		 */
		api.login = function (loginData) {
			return User
				// @TODO Find way to remove building model before calling
				.$build(loginData)
				.$login()
				.$asPromise()
				.then(function (user) {
					// Make user, customers accessible globally
					$rootScope.user = user;

					localStorageService.set('user', user);
					localStorageService.set('token', user.$metadata.token);

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
		api.logout = function () {
			return User
				// @TODO Find way to remove building model before calling
				.$build()
				.$logout()
				.$asPromise()
				.then(function () {

					localStorageService.clearAll();
					localStorageService.cookie.clearAll();

					setDefaultsHeaders.clearHeaders();
					Permission.clearFeautres();
				})
				.catch(function (response) {
					$log.error('Could not logout the user', response);
				});
		};
		return api;
	}

	module.registerService('UserAPI', UserAPI);
});


