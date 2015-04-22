define(['layout/module', 'lodash'], function (module, _) {

	'use strict';

	module.registerDirective('smartRouterAnimationWrap', function ($rootScope, $timeout) {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} element
			 * @param {} attributes
			 */
			compile: function (element, attributes) {
				element.removeAttr('smart-router-animation-wrap data-smart-router-animation-wrap wrap-for data-wrap-for');

				element.addClass('router-animation-container');

				$('<div class="router-animation-loader"><i class="fa fa-gear fa-4x fa-spin"></i></div>').appendTo(element);

				var animateElementSelector = attributes.wrapFor;
				var viewsToMatch = attributes.smartRouterAnimationWrap.split(/\s/);

				var needRunContentViewAnimEnd = false;

				/**
				 * Description
				 * @method contentViewAnimStart
				 */
				function contentViewAnimStart() {
					needRunContentViewAnimEnd = true;
					element.css({
						height: element.height() + 'px',
						overflow: 'hidden'
					}).addClass('active');

					$(animateElementSelector).addClass('animated faster fadeOutDown');
				}

				/**
				 * Description
				 * @method contentViewAnimEnd
				 */
				function contentViewAnimEnd() {
					if (needRunContentViewAnimEnd) {
						element.css({
							height: 'auto',
							overflow: 'visible'
						}).removeClass('active');

						$(animateElementSelector).addClass('animated faster fadeInUp');

						needRunContentViewAnimEnd = false;

						$timeout(function () {
							$(animateElementSelector).removeClass('animated');
						}, 10);
					}
				}

				var destroyForStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
					var isAnimRequired = _.any(viewsToMatch, function (view) {
						return _.has(toState.views, view) || _.has(fromState.views, view);
					});
					if (isAnimRequired) {
						contentViewAnimStart();
					}
				});

				var destroyForEnd = $rootScope.$on('$viewContentLoaded', function () {
					contentViewAnimEnd();
				});

				var destroyForEndless = $rootScope.$on('$stateChangeSuccess', function () {
					contentViewAnimEnd();
				});

				element.on('$destroy', function () {
					destroyForStart();
					destroyForEnd();
					destroyForEndless();
				});
			}
		};
	});
});
