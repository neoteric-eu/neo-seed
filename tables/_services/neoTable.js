define(['seed/tables/module', 'angular-table'], function (module) {
	'use strict';

	/**
	 * Manages overwriting custom templates of angular tables
	 * @class neoTable
	 * @memberOf seed.tables
	 *
	 * @param $templateCache {Object} Template cashing helper
	 * @param $http {Object} Angular low level communication service
	 * @param $log {Object} Logging service
	 * @return {{}}
	 */
	function neoTable($templateCache, $http, $log) {
		$log = $log.getInstance('seed.tables.neoTable');

		var neoTableBuilder = {};

		/**
		 * Helper caching function
		 * @param templateName {String} path to HTML to be cached
		 * @param cacheKey {String} Key under which template will be stored
		 */
		function loadTemplate(templateName, cacheKey) {
			$http
				.get('seed/tables/' + templateName)
				.then(function (template) {
					$templateCache.put(cacheKey, template);

					$log.debug('Loaded neoTable ' +
						templateName +
						' template into cache under key: ' +
						cacheKey);
				})
				.catch(function () {
					$log.error('Could not load neoTable ' + templateName + ' template');
				});
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
