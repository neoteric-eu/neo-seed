define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PermissionTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf {app.docs}
	 *
	 * @param BaseEnum {Function} Augmentation of enum-type object
	 * @param gettext {Function} Translation helper service
	 * @param $log {Object} Logging service
	 * @return {Function} Enum instance
	 */
	function PermissionTypesEnum($log, BaseEnum, gettext) {

		$log.debug('Initiated enum object');

		return new BaseEnum({
			EDIT: {
				label: gettext('Edit')
			},
			READ: {
				label: gettext('Read')
			},
			SHARE: {
				label: gettext('Share')
			},
			ALL: {
				label: gettext('All')
			}
		});
	}

	module.service('PermissionTypesEnum', PermissionTypesEnum);
});
