define(['seed/layout/module'], function (module) {
	'use strict';

	function hrefVoid() {
		return {
			restrict: 'A',
			link: function (scope, element) {
				element.attr('href', '#');
				element.on('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
				});
			}
		};
	}

	module.directive('hrefVoid', hrefVoid);
});
