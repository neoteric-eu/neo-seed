define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Composes container navigation using templates placed in appName/_config/navigation.html
	 * @class neoNavigation
	 * @memberOf seed.components
	 *
	 * @param $log {Object} Logging service
	 * @param $state {Object} State helper
	 * @param $q {Object} Angular implementation of promises
	 * @param $compile {Function} Compiles an HTML string or DOM into a template
	 * @param $timeout {Function} Timeout service
	 * @param neoTemplateLoader {Object} Caching utility
	 * @param appConf {Object} Application configuration
	 * @return {{restrict: string, template: string, controller: Function}}
	 */
	function neoNavigation($log, $state, $q, $compile, $timeout, neoTemplateLoader, appConf) {

		$log = $log.getInstance('seed.components.neoNavigation');
		$log.debug('Initiated directive');

		return {
			restrict: 'E',
			template: '<ul></ul>',

			controller: function ($scope, $element) {
				var promises = _
					.chain(appConf.appsSettings)
					.sortBy('order')
					.pluck('directory')
					.map(function (directory) {
						return neoTemplateLoader.load('apps/' + directory + '/__misc/_navigation/navigation.html');
					})
					.value();

				$q
					.all(promises)
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

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('neoNavigation', neoNavigation);
});
