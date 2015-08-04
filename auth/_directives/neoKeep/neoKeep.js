define(['seed/auth/module'], function (module) {
	'use strict';

	return module.directive('neoKeep', function (Permission) {
		return {
			restrict: 'A',
			replace: true,

			link: function (scope, element, attrs) {
				if (!Permission.hasPermission(attrs.neoKeep)) {
					element.hide();
				}
			}
		};
	});
});
