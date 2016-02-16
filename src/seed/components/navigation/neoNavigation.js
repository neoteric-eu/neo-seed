define(['seed/components/module'], function (module) {
	'use strict';

	function neoNavigation($log, $state, $q, $compile, $timeout, neoTemplateLoader, appConf) {

		$log = $log.getInstance('seed.components.neoNavigation');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			template: '<ul></ul>',
			scope: {},
			controllerAs: 'vm',

			/**
			 * Composes container navigation using templates placed in `src/app{appName}/__misc/_navigation/navigation.html` from `src/config/apps.json`.
			 * Navigation elements are added using [neoNavigationItem]{@link seed.components.neoNavigationItem} and [neoNavigationGroup]{@link seed.components.neoNavigationGroup} directives.
			 * @class neoNavigation
			 * @memberOf seed.components
			 *
			 * @example
			 * <neo-navigation></neo-navigation>
			 *
			 * @requires $log - Logging service
			 * @requires $state - State helper
			 * @requires $q - Angular implementation of promises
			 * @requires $compile - Compiles an HTML string or DOM into a template
			 * @requires $timeout - Timeout service
			 * @requires neoTemplateLoader - Caching utility
			 * @requires appConf - Application configuration
			 *
			 * @param $scope {Object} Angular scope provider
			 * @param $element {Object} Angular HTML element provider
			 */
			controller: function ($scope, $element) {
				/** @lends seed.components.neoNavigation.prototype */
				var vm = this;

				// variables
				/**
				 * @property templatePromises {Array} Set of promises loading navigation template HTML
				 */
				vm.templatePromises = [];

				// methods
				/**
				 * @method
				 * @description initializes directive
				 */
				vm.init = init;

				vm.init();


				function init(){
					vm.templatePromises = _
						.chain(appConf.appsSettings)
						.filter(function(app){
							return !_.isUndefined(app.order);
						})
						.sortBy('order')
						.pluck('directory')
						.map(function (directory) {
							return neoTemplateLoader.load('apps/' + directory + '/__misc/_navigation/navigation.html');
						})
						.value();

					$q
						.all(vm.templatePromises)
						.then(function (templates) {
							var html = templates.join();
							$element.contents().append($compile(html)($scope));

							// Async apply is not working here (ಠ╭╮ಠ)
							$timeout(function () {
								$element
									.find('a[ui-sref]')
									.filter(function () {
										return $state.includes($(this).attr('ui-sref'));
									})
									.parents('li:not(:first)')
									.each(function () {
										$(this)
											.addClass('open')
											.find('ul:first')
											.slideDown(0);
									});
							});
						})
						.catch(function () {
							$log.error('Error loading navigation templates');
						});

					$log.debug('Initialized controller');
				}
			}
		};
	}

	module.directive('neoNavigation', neoNavigation);
});
