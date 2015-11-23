define(['seed/helpers/module', '../../../../../../bower_components/moment/moment'], function (module, moment) {
	'use strict';

	/**
	 * @constructor DatetimeSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DatetimeSerializerService($log) {
		$log = $log.getInstance('seed.helpers.DatetimeSerializerService');

		this.decode = function (val) {

			var decodedDate = moment(val, moment.ISO_8601);
			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					$log.error('Could not serialize to moment object from timestamp value: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			return val.utc().toISOString();
		};

		$log.debug('Initialized service');
	}

	module.service('DatetimeSerializerService', DatetimeSerializerService);
});
