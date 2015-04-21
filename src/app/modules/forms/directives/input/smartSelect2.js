define(['modules/forms/module', 'select2'], function (module) {
	'use strict';

	module.registerDirective('smartSelect2', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} element
			 */
			compile: function (element) {
				element.removeAttr('smart-select2 data-smart-select2');
				element.select2();
			}
		};
	});
});
