define(['auth/module'], function (module) {
	'use strict';

	return module.registerDirective('neoOmit', function (Permission) {
		return {
			restrict: 'A',
			replace: true,
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 * @param {} attrs
			 */
			link: function (scope, element, attrs) {
				if (Permission.hasPermission(attrs.neoOmit)) {
					element.hide();
				}
			}
		};
	});
});
