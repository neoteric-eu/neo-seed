define(['seed/forms/module', 'ionslider'], function (module) {
	'use strict';

	return module.registerDirective('smartIonslider', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-ionslider data-smart-ionslider');

				tElement.ionRangeSlider();
			}
		};
	});
});
