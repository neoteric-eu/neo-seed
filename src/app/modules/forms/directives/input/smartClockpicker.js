define(['modules/forms/module', 'clockpicker'], function (module) {

	'use strict';

	return module.registerDirective('smartClockpicker', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-clockpicker data-smart-clockpicker');

				var options = {
					placement: 'top',
					donetext: 'Done'
				};

				tElement.clockpicker(options);
			}
		};
	});
});
