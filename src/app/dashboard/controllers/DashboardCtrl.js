define(['dashboard/module'], function(module) {
	'use strict';

	/**
	 * @constructor
	 */
	function DashboardCtrl($scope) {
		$scope.hi = 'yo';

		this.yo = function() {
			'łacap?';
		};
	}

	module.registerController('DashboardCtrl', DashboardCtrl);
});
