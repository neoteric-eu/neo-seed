define(['seed/helpers/module', '../../../../../../bower_components/moment/moment'], function (module, moment) {
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
					$log.error('Could not serialize to moment object from date value: ' + val);
				}
				return undefined;
			}
		};

		this.encode = function (val) {
			return val.format('YYYY-MM-DD');
		};

		$log.debug('Initialized service');
	}

	module.service('DateSerializerService', DateSerializerService);
});
