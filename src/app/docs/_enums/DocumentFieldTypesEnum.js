define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentFieldTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} gettext Translation helper service
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @return {Object} Enum instance
	 */
	function DocumentFieldTypesEnum(BaseEnum, gettext) {
		return new BaseEnum({
			EMAIL: {
				label: gettext('email')
			},
			URL: {
				label: gettext('url')
			},
			NUMBER: {
				label: gettext('number')
			},
			DATE: {
				label: gettext('date')
			},
			TEXT: {
				label: gettext('text')
			},
			TIME: {
				label: gettext('time')
			},
			DATETIME: {
				label: gettext('datetime')
			},
			COLOR: {
				label: gettext('color picker')
			},
			SELECT: {
				label: gettext('select')
			},
			MULTI_SELECT: {
				label: gettext('multi-select')
			},
			TEXTAREA: {
				label: gettext('textarea')
			}
		});
	}

	module.registerService('DocumentInputTypesEnum', DocumentFieldTypesEnum);
});
