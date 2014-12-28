define(
	[
		'dashboard/module',
		'moment'
	],
	function(
		module,
		moment
	) {

	'use strict';

	/**
	 * @constructor
	 */
	function DashboardCtrl(
		$scope,
		$window
	) {
		$scope.date = moment().format('lll');

		this.sayHello = function() {
			$window.alert('Hello World');
		};
	}

	module.registerController('DashboardCtrl', DashboardCtrl);
});
