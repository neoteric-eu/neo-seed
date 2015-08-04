define(['seed/auth/module'], function (module) {
	'use strict';

	function loginInfo() {
		return {
			restrict: 'A',
			templateUrl: 'seed/auth/_directives/login-info.html',
			scope: {},

			link: function (scope) {
				var unbindWatch = scope.$watch(scope.$root.user, function (newValue, oldValue) {
					if (newValue !== oldValue) {
						scope.user = newValue.user;
						unbindWatch();
					}
				});
			}
		};
	}

	return module.directive('loginInfo', loginInfo);
});
