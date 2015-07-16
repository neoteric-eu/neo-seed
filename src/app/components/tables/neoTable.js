define([
	'app',
	'angular-table'
], function (module) {
	'use strict';

	function neoTable($templateCache, $http, $log) {

		var neoTableBuilder = {};

		function loadTemplate(templateName, cacheKey) {
			$http
				.get('app/components/tables/' + templateName)
				.success(function (template) {
					$templateCache.put(cacheKey, template);

					$log.debug('Loaded neoTable ' +
						templateName +
						' template into cache under key: ' +
						cacheKey);
				})
				.error(function () {
					$log.error('Could not load neoTable ' + templateName + ' template');
				});
		}

		neoTableBuilder.init = function () {
			loadTemplate('partials/neo-header.html', 'ng-table/header.html');
			loadTemplate('partials/neo-footer.html', 'ng-table/pager.html');
			loadTemplate('filters/text-filter.html', 'ng-table/filters/text.html');
			loadTemplate('filters/date-filter.html', 'ng-table/filters/date.html');

			$log.debug('Initiated service');
		};

		return neoTableBuilder;
	}


	module.service('neoTable', neoTable);
});
