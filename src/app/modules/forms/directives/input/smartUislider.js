define(['modules/forms/module', 'bootstrap-slider'], function (module) {
	'use strict';

	return module.registerDirective('smartUislider', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-uislider data-smart-uislider');

				tElement.bootstrapSlider();

				$(tElement.data('bootstrapSlider').sliderElem).prepend(tElement);
			}
		};
	});
});
