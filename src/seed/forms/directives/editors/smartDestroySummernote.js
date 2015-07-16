define(['seed/forms/module', 'summernote'], function (module) {
	'use strict';

	module.registerDirective('smartDestroySummernote', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {
				tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote');
				tElement.on('click', function () {
					angular.element(tAttributes.smartDestroySummernote).destroy();
				});
			}
		};
	});
});
