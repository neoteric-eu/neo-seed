define(['seed/auth/module'], function (module) {
	'use strict';

	return module.directive('neoOmit', function (Permission) {
		return {
			restrict: 'A',
			replace: true,

			link: function (scope, element, attrs) {
				if (Permission.hasPermission(attrs.neoOmit)) {
					element.hide();
				}
			}
		};
	});
});
