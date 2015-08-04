define(['seed/module'], function (app) {
	'use strict';

	return app.factory('activityService', function ($http, $log) {

		/**
		 * Description
		 * @method getActivities
		 * @param {} callback
		 */
		function getActivities(callback) {
			$http.get('apps/demo/api/activities/activity.json').success(function (data) {
				callback(data);
			}).error(function () {
				$log.log('Error');
				callback([]);
			});
		}

		/**
		 * Description
		 * @method getActivitiesByType
		 * @param {} type
		 * @param {} callback
		 */
		function getActivitiesByType(type, callback) {
			$http.get('apps/demo/api/activities/activity-' + type + '.json').success(function (data) {
				callback(data);
			}).error(function () {
				$log.log('Error');
				callback([]);
			});
		}

		return {
			/**
			 * Description
			 * @method get
			 * @param {} callback
			 */
			get: function (callback) {
				getActivities(callback);
			},
			/**
			 * Description
			 * @method getbytype
			 * @param {} type
			 * @param {} callback
			 */
			getbytype: function (type, callback) {
				getActivitiesByType(type, callback);
			}
		};
	});
});
