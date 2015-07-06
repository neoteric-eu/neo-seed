define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Interface for REST communication with server
	 * @constructor VersionAPI
	 * @implements {app.BaseAPI}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param BaseAPI {Function} Base interface for REST communication with server
	 * @param Version {Object} Data model class
	 * @return {Function} Instantiated service
	 */
	function VersionAPI($log, BaseAPI, Version) {

		$log.debug('Instantiated API service');

		return new BaseAPI(Version);
	}

	module.service('VersionAPI', VersionAPI);
});



