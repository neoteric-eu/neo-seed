define(['modules/forms/module', 'bootstrap-tagsinput'], function (module) {
	'use strict';

	return module.registerDirective('smartTagsinput', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
				tElement.tagsinput();
			}
		};
	});
});
