define(['modules/forms/module', 'summernote'], function (module) {
	'use strict';

	module.registerDirective('smartEditSummernote', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 * @param {} tAttributes
			 */
			compile: function (tElement, tAttributes) {
				tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
				tElement.on('click', function () {
					angular.element(tAttributes.smartEditSummernote).summernote({
						focus: true
					});
				});
			}
		};
	});
});
