define(['seed/module'], function (app) {
	'use strict';

	return app.controller('ActivitiesCtrl', function ($scope, $log, activityService) {

		$scope.activeTab = 'default';
		$scope.currentActivityItems = [];

		// Getting different type of activites
		activityService.get(function (data) {

			$scope.activities = data.activities;

		});

		/**
		 * Description
		 * @method isActive
		 * @param {} tab BinaryExpression
		 */
		$scope.isActive = function (tab) {
			return $scope.activeTab === tab;
		};

		/**
		 * Description
		 * @method setTab
		 * @param {} activityType
		 */
		$scope.setTab = function (activityType) {
			$scope.activeTab = activityType;

			activityService.getbytype(activityType, function (data) {

				$scope.currentActivityItems = data.data;

			});

		};

	});

});
