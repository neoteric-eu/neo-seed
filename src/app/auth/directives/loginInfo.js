define(['auth/module'], function (module) {
	'use strict';

	return module.registerDirective('loginInfo', function (session) {

		return {
			restrict: 'A',
			templateUrl: 'app/auth/directives/login-info.html',
			scope: {},
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 */
			link: function (scope) {
				var unbindWatch = scope.$watch(function() {
					return session.userData.getModel();
				}, function (newValue, oldValue) {
					if(newValue !== oldValue) {
						scope.user = newValue.user;
						unbindWatch();
					}
				});
			}
		};
	});
});
