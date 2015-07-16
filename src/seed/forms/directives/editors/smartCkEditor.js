define(['seed/forms/module', 'ckeditor'], function (module) {
	'use strict';

	module.registerDirective('smartCkEditor', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-ck-editor data-smart-ck-editor');

				CKEDITOR.replace(tElement.attr('name'), {height: '380px', startupFocus: true});
			}
		};
	});
});
