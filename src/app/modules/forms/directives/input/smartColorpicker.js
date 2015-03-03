define(['modules/forms/module', 'bootstrap-colorpicker'], function (module) {

	'use strict';

	return module.registerDirective('smartColorpicker', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {
				tElement.removeAttr('smart-colorpicker data-smart-colorpicker');

				var aOptions = _.pick(tAttributes, ['']);
				var options = _.extend(aOptions, {});

				tElement.colorpicker(options);
			}
		};
	});
});
