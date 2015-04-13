define(['app'], function (module) {
	'use strict';

	/**
	 * @constructor* @return
	 * @method RootController
	 * @param $state
	 * @param $state
	 * @param session
	 * @param UserAPI
	 * @param ProfileAPI
	 */
	function RootController($rootScope,
													$state,
													session,
													UserAPI,
													ProfileAPI) {

		/**
		 * Description
		 * @method logout
		 * @param {} user
		 */
		$rootScope.logout = function (user) {
			UserAPI
				.logout(user)
				.then(function () {
					session.clearSession();
					$state.reload();
				});
		};

		/**
		 * Description
		 * @method switchProfile
		 * @param {object} customer
		 */
		$rootScope.switchProfile = function (customer) {
			ProfileAPI.setSelected(customer);
			$state.reload();
		};
	}

	module.registerController('RootController', RootController);
});
