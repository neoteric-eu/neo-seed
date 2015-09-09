define(['seed/tables/module', 'angular-table'], function (module) {
	'use strict';

	/**
	 * Manages overwriting custom templates of angular tables
	 * @class neoTable
	 * @memberOf seed.tables
	 *
	 * @param $log {Object} Logging service
	 * @param neoTemplateLoader
	 */
	function NeoTable($log, neoTemplateLoader) {
		$log = $log.getInstance('seed.tables.neoTable');

		this.init = function init() {
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
	}

	module.service('neoTable', NeoTable);
});
