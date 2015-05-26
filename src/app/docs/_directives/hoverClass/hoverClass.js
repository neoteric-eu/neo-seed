define([
	'../../templates/fields/module'
], function (module) {
	'use strict';

	/**
	 * Directive that adds class to element when mouse is over it
	 * @class hoverClass
	 * @memberOf app.docs
	 *
	 * @example
	 * <div hover-class="underline"></div>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, link: Function}}
	 */
	function hoverClass($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			scope: {
				hoverClass: '@'
			},
			link: function (scope, element) {

				element.on('mouseenter', function () {
					element.addClass(scope.hoverClass);
				});

				element.on('mouseleave', function () {
					element.removeClass(scope.hoverClass);
				});


				$log.debug('Called linking function');
			}
		};
	}

	module.directive('hoverClass', hoverClass);
});
