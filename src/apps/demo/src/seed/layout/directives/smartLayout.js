define(['seed/layout/module'], function (module) {
	'use strict';

	module.registerDirective('smartLayout', function ($rootScope, $timeout, $interval, $q, $log) {

		var initialized = false, initializedResolver = $q.defer();
		initializedResolver.promise.then(function () {
			initialized = true;
		});

		var $window = $(window),
			$html = $('html'),
			$body = $('body'),
			$navigation,
			$menu,
			$ribbon,
			$footer;


		(function cacheElements() {
			$navigation = $('#header');
			$menu = $('#left-panel');
			$ribbon = $('#ribbon');
			$footer = $('.page-footer');
			if (_.every(
					[$navigation, $menu, $ribbon, $footer],
					function ($it) {
						return angular.isNumber($it.height());
					})
			) {
				initializedResolver.resolve();
			} else {
				$timeout(cacheElements, 100);
			}
		})();


		return {
			priority: 2014,
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} tElement
			 */
			compile: function (tElement) {
				tElement.removeAttr('smart-layout data-smart-layout');

				var appViewHeight = 0,
					appViewWidth = 0,
					calcWidth,
					calcHeight,
					deltaX,
					deltaY;

				var forceResizeTrigger = false;

				/**
				 * Description
				 * @method resizeListener
				 */
				function resizeListener() {

					var menuHeight = $body.hasClass('menu-on-top') &&
					$menu.is(':visible') ? $menu.height() : 0;
					var menuWidth = !$body.hasClass('menu-on-top') && $menu.is(':visible') ? $menu.width() +
					$menu.offset().left : 0;

					var $content = $('#content');
					var contentXPad = $content.outerWidth(true) - $content.width();
					var contentYPad = $content.outerHeight(true) - $content.height();


					calcWidth = $window.width() - menuWidth - contentXPad;
					calcHeight = $window.height() -
					menuHeight -
					contentYPad -
					$navigation.height() -
					$ribbon.height() -
					$footer.height();

					deltaX = appViewWidth - calcWidth;
					deltaY = appViewHeight - calcHeight;
					if (Math.abs(deltaX) || Math.abs(deltaY) || forceResizeTrigger) {

						$rootScope.$broadcast('$smartContentResize', {
							width: calcWidth,
							height: calcHeight,
							deltaX: deltaX,
							deltaY: deltaY
						});
						appViewWidth = calcWidth;
						appViewHeight = calcHeight;
						forceResizeTrigger = false;
					}
				}


				var looping = false;
				$interval(function () {
					if (looping) {
						loop();
					}
				}, 300);

				var debouncedRun = _.debounce(function () {
					run(300);
				}, 300);

				/**
				 * Description
				 * @method run
				 * @param {} delay
				 */
				function run(delay) {
					initializedResolver.promise.then(function () {
						attachOnResize(delay);
					});
				}

				run(10);

				/**
				 * Description
				 * @method detachOnResize
				 */
				function detachOnResize() {
					looping = false;
				}

				/**
				 * Description
				 * @method attachOnResize
				 * @param {} delay
				 */
				function attachOnResize(delay) {
					$timeout(function () {
						looping = true;
					}, delay);
				}

				/**
				 * Description
				 * @method loop
				 */
				function loop() {
					$body.toggleClass('mobile-view-activated', $window.width() < 979);

					if ($window.width() < 979) {
						$body.removeClass('minified');
					}

					resizeListener();
				}

				/**
				 * Description
				 * @method handleHtmlId
				 * @param {} toState
				 */
				function handleHtmlId(toState) {
					if (toState.data && toState.data.htmlId) {
						$html.attr('id', toState.data.htmlId);
					}
					else {
						$html.removeAttr('id');
					}
				}

				$rootScope.$on('$stateChangeStart', function (event, toState) {
					handleHtmlId(toState);
					detachOnResize();
				});

				// initialized with 1 cause we came here with one $viewContentLoading request
				var viewContentLoading = 1;
				$rootScope.$on('$viewContentLoading', function () {
					$log.debug('$viewContentLoading');
					viewContentLoading++;
				});

				$rootScope.$on('$stateChangeSuccess', function () {
					$log.debug('$stateChangeSuccess');
					forceResizeTrigger = true;
				});

				$rootScope.$on('$viewContentLoaded', function () {
					$log.debug('$viewContentLoaded');
					viewContentLoading--;

					if (viewContentLoading === 0 && initialized) {
						debouncedRun();
					}
				});
			}
		};
	});
});
