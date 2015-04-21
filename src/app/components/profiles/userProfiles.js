define(['app'], function (app) {
	'use strict';

	var userProfiles = function ($window, Profile, localStorageService) {
		return {
			restrict: 'EA',
			templateUrl: 'app/components/profiles/user-profiles.html',
			scope: true,
			controllerAs: 'vm',
			controller: function () {
				var vm = this;
				vm.profiles = localStorageService.get('user').customers;
				vm.selectedProfile = localStorageService.get('activeProfile');
				vm.changeProfile = changeProfile;

				function changeProfile(profile) {
					localStorageService.set('activeProfile', profile);
					$window.location.reload();
				}
			}
		};
	};

	app.registerDirective('userProfiles', userProfiles);
});
