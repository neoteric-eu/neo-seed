define(['seed/forms/module', 'jquery-ui'], function (module) {
	'use strict';

	return module.registerDirective('smartSpinner', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {
				tElement.removeAttr('smart-spinner');

				var options = {};
				if (tAttributes.smartSpinner === 'deicimal') {
					options = {
						step: 0.01,
						numberFormat: 'n'
					};
				} else if (tAttributes.smartSpinner === 'currency') {
					options = {
						min: 5,
						max: 2500,
						step: 25,
						start: 1000,
						numberFormat: 'C'
					};
				}

				tElement.spinner(options);
			}
		};
	});
});
