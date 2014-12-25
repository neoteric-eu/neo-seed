define(['dashboard/module'], function(module) {
	'use strict';

	/**
	 * @constructor
	 */
	function DashboardCtrl($scope) {
		$scope.hi = 'yo';
	}

	module.registerController('DashboardCtrl', DashboardCtrl);
});
