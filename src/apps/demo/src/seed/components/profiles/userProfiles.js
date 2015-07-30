define(['seed/module'], function (app) {
	'use strict';

	var userProfiles = function ($log, $window, $rootScope, ipCookie) {
		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/profiles/user-profiles.html',
			controllerAs: 'vm',
			controller: function () {
				var vm = this;

				// Variables
				vm.profiles = $rootScope.user.customers;
				vm.selectedProfile = _.findWhere($rootScope.user.customers, {'customerId': ipCookie('activeCustomer')});

				// Functions
				vm.changeProfile = changeProfile;

				function changeProfile(profile) {
					ipCookie('activeCustomer', profile.customerId);
					$log.debug('Changed profile');

					$window.location.reload();
				}
			}
		};
	};

	app.registerDirective('userProfiles', userProfiles);
});
