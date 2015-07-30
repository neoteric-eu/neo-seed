define(['seed/layout/module'], function (module) {
	'use strict';

	module.registerDirective('hrefVoid', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {
				element.attr('href', '#');
				element.on('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
				});
			}
		};
	});
});
