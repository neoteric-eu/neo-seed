define(['app'], function(app){
	'use strict';

	return app.directive('userProfiles', function($state, session){
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/profiles/user-profiles.html',
			scope: {},
			link: function(scope){

				scope.changeProfile = function(customer) {
					session.switchCustomer(customer);
					$state.reload();
				};

				var unbindWatch = scope.$watch(function() {
					return session.userData.getModel();
				}, function (userData) {
					if(!_.isEmpty(userData)) {
						scope.profiles = userData.user.customers;
						scope.currentProfile = session.currentCustomer.getModel();
						unbindWatch();
					}
				});
			}
		};
	});
});
