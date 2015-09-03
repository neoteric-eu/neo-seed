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
	function neoTable($log, neoTemplateLoader) {
		$log = $log.getInstance('seed.tables.neoTable');

		var neoTableBuilder = {};

		neoTableBuilder.init = function () {

			neoTemplateLoader.load('seed/tables/partials/neo-header.html', 'ng-table/header.html');
			neoTemplateLoader.load('seed/tables/partials/neo-footer.html', 'ng-table/pager.html');
			neoTemplateLoader.load('seed/tables/partials/neo-sorting.html', 'ng-table/sorterRow.html');
			neoTemplateLoader.load('seed/tables/partials/neo-filters.html', 'ng-table/filterRow.html');
			neoTemplateLoader.load('seed/tables/filters/text-filter.html', 'ng-table/filters/text.html');
			neoTemplateLoader.load('seed/tables/filters/date-filter.html', 'ng-table/filters/date.html');
			neoTemplateLoader.load('seed/tables/filters/timestamp-filter.html', 'ng-table/filters/timestamp.html');
			neoTemplateLoader.load('seed/tables/filters/enum-filter.html', 'ng-table/filters/enum.html');
			neoTemplateLoader.load('seed/tables/filters/related-filter.html', 'ng-table/filters/related.html');

			$log.debug('Initiated service');
		};

		return neoTableBuilder;
	}

	module.service('neoTable', neoTable);
});
