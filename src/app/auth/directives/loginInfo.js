define(['auth/module'], function (module) {
	'use strict';

	return module.registerDirective('loginInfo', function () {

		return {
			restrict: 'A',
			templateUrl: 'app/auth/directives/login-info.tpl.html',
			link: function (scope, element) {
				/*User.initialized.then(function () {
					scope.user = User;
				});*/
			}
		};
	});
});
