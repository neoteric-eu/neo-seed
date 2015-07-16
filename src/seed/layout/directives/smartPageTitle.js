define(['seed/layout/module'], function (module) {

	'use strict';

	module.registerDirective('smartPageTitle', function ($rootScope, $timeout) {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method compile
			 * @param {} element
			 * @param {} attributes
			 */
			compile: function (element, attributes) {
				element.removeAttr('smart-page-title data-smart-page-title');

				var defaultTitle = attributes.smartPageTitle;
				/**
				 * Description
				 * @method listener
				 * @param {} event
				 * @param {} toState
				 */
				var listener = function (event, toState) {
					var title = defaultTitle;
					if (toState.data && toState.data.title) {
						title = toState.data.title + ' | ' + title;
					}
					// Set asynchronously so page changes before title does
					$timeout(function () {
						$('html head title').text(title);
					});
				};

				$rootScope.$on('$stateChangeStart', listener);

			}
		};
	});
});
