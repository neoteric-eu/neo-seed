define(['seed/forms/module', 'jquery-maskedinput'], function (module) {
	'use strict';

	/**
	 * Adds custom masking to the input value
	 * @example
	 * smart-masked-input="aaa"
	 * mask-placeholder= "*"
	 * @method smartMaskedInput
	 * @return ObjectExpression
	 */
	function smartMaskedInput() {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {

				// Capitalized letter only masking
				$.mask.definitions['A'] = '[A-Z]';

				tElement.removeAttr('smart-masked-input data-smart-masked-input');

				var options = {};
				if (_.has(tAttributes, 'maskPlaceholder')) {
					options.placeholder = tAttributes.maskPlaceholder;
				}
				tElement.mask(tAttributes.smartMaskedInput, options);
			}
		};
	}

	return module.registerDirective('smartMaskedInput', smartMaskedInput);
});
