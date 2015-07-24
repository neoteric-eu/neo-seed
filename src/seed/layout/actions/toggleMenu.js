define(['seed/layout/module'], function (module) {
	'use strict';

	module.directive('toggleMenu', function () {
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
				 * @method toggleMenu
				 */
				var toggleMenu = function () {
					if (!$body.hasClass('menu-on-top')) {
						$('html').toggleClass('hidden-menu-mobile-lock');
						$body.toggleClass('hidden-menu');
						$body.removeClass('minified');
					} else if ($body.hasClass('menu-on-top') && $body.hasClass('mobile-view-activated')) {
						$('html').toggleClass('hidden-menu-mobile-lock');
						$body.toggleClass('hidden-menu');
						$body.removeClass('minified');
					}
				};

				element.on('click', toggleMenu);

				scope.$on('requestToggleMenu', function () {
					toggleMenu();
				});
			}
		};
	});
});
