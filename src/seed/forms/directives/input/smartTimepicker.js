define(['seed/forms/module', 'bootstrap-timepicker'], function (module) {
	'use strict';

	return module.registerDirective('smartTimepicker', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-timepicker data-smart-timepicker');
				tElement.timepicker();
			}
		};
	});
});
