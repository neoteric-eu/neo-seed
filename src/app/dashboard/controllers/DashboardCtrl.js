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
	 * @constructor* @method DashboardCtrl
	 * @param {} $window
	 * @param {} $window
	 */
	function DashboardCtrl(
		$scope,
		$window
	) {
		$scope.date = moment().format('lll');

		/**
		 * Description
		 * @method sayHello
		 */
		this.sayHello = function() {
			$window.alert('Hello World');
		};
	}

	module.registerController('DashboardCtrl', DashboardCtrl);
});
