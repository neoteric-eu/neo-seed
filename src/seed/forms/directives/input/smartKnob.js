define(['seed/forms/module', 'jquery-knob'], function (module) {
	'use strict';

	return module.registerDirective('smartKnob', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-knob data-smart-knob');

				tElement.knob();
			}
		};
	});
});
