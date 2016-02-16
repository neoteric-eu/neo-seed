define(['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * @constructor TimeSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function TimeSerializerService($log) {
		$log = $log.getInstance('seed.helpers.TimeSerializerService');

		this.decode = function (val) {

			var decodedDate = moment(val, 'HH:mm');
			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					$log.error('Could not serialize to moment object from time value: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			if (_.isEmpty(val)) {
				return;
			}

			if (_.isFunction(val.isValid) && val.isValid()) {
				return val.format('HH:mm');
			} else {
				throw new Error('Could not serialize from moment object to timestamp value: ' + val);
			}
		};

		$log.debug('Initialized service');
	}

	module.service('TimeSerializerService', TimeSerializerService);
});
