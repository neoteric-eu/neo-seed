define(['app'], function (app) {
	'use strict';

	return app.directive('userProfiles', function ($state, Profile, $rootScope) {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/profiles/user-profiles.html',
			scope: {},
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 */
			link: function (scope) {

				/**
				 * Description
				 * @method changeProfile
				 * @param {} customer
				 */
				scope.changeProfile = function (customer) {
					Profile.switchProfile(customer);
					$state.reload();
				};

				var unbindWatch = scope.$watch(function () {
					return $rootScope.user;
				}, function (user) {
					if (!_.isEmpty(user)) {
						scope.profiles = user.customers;
						scope.currentProfile = Profile.$selected;
						unbindWatch();
					}
				});
			}
		};
	});
});
