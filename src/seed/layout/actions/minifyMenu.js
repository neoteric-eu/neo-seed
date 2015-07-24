define(['seed/layout/module'], function (module) {
	'use strict';

	module.directive('minifyMenu', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {
				var $body = $('body');
				/**
				 * Description
				 * @method minifyMenu
				 */
				var minifyMenu = function () {
					if (!$body.hasClass('menu-on-top')) {
						$body.toggleClass('minified');
						$body.removeClass('hidden-menu');
						$('html').removeClass('hidden-menu-mobile-lock');
					}
				};

				element.on('click', minifyMenu);
			}
		};
	});
});
