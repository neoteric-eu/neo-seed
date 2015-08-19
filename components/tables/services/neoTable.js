define([
	'../../module',
	'angular-table'
], function (module) {
	'use strict';

	function neoTable($templateCache, $http, $log) {
		$log = $log.getInstance('seed.components.neoTable');

		var neoTableBuilder = {};

		function loadTemplate(templateName, cacheKey) {
			var template = $templateCache.get('seed/components/tables/' + templateName);

			if (template) {
				$templateCache.put(cacheKey, template);

				$log.debug('Loaded neoTable ' +
					templateName +
					' template into cache under key: ' +
					cacheKey);

			} else {
				$http
					.get('seed/components/tables/' + templateName)
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
		}

		neoTableBuilder.init = function () {
			loadTemplate('partials/neo-header.html', 'ng-table/header.html');
			loadTemplate('partials/neo-footer.html', 'ng-table/pager.html');
			loadTemplate('partials/neo-sorting.html', 'ng-table/sorterRow.html');
			loadTemplate('partials/neo-filters.html', 'ng-table/filterRow.html');

			loadTemplate('filters/text-filter.html', 'ng-table/filters/text.html');
			loadTemplate('filters/date-filter.html', 'ng-table/filters/date.html');
			loadTemplate('filters/timestamp-filter.html', 'ng-table/filters/timestamp.html');
			loadTemplate('filters/enum-filter.html', 'ng-table/filters/enum.html');
			loadTemplate('filters/related-filter.html', 'ng-table/filters/related.html');

			$log.debug('Initiated service');
		};

		return neoTableBuilder;
	}

	module.service('neoTable', neoTable);
});
