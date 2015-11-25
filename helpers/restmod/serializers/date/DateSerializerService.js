define(['seed/helpers/module', 'moment'], function (module, moment) {
	'use strict';

	/**
	 * @constructor DateSerializerService
	 * @memberOf seed.helpers
	 *
	 * @param $log {Object} Logging service
	 * @return {{decode: decode, encode: encode}}
	 */
	function DateSerializerService($log) {
		$log = $log.getInstance('seed.helpers.DateSerializerService');

		this.decode = function (val) {

			var decodedDate = moment(val, 'YYYY-MM-DD');
			if (decodedDate.isValid()) {
				return decodedDate;
			} else {
				// @todo: Handle on backend returning null values for unset fields
				if (!_.isNull(val)) {
					$log.error('Could not serialize from date value to moment object: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			if (_.isEmpty(val)) {
				return;
			}

			if (_.isFunction(val.isValid) && val.isValid()) {
				return val.format('YYYY-MM-DD');
			} else {
				throw new Error('Could not serialize from moment object to date value: ' + val);
			}
		};

		$log.debug('Initialized service');
	}

	module.service('DateSerializerService', DateSerializerService);
});
