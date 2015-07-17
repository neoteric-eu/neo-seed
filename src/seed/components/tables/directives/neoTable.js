define(['seed/module'], function (module) {
	'use strict';

	function neoTable() {
		return {
			restrict: 'E',
			templateUrl: 'apps/modules/components/tables/directive/neo-table.html',
			link: function (scope, element, attr) {
				scope.table.view = attr.view;
			}
		};
	}

	module.registerDirective('neoTable', neoTable);
});
