define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentInputTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} gettext Translation helper service
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @return {Object} Enum instance
	 */
	function DocumentInputTypesEnum(BaseEnum, gettext) {
		return new BaseEnum({
			EMAIL: {
				type: 'email',
				label: gettext('email')
			},
			URL: {
				type: 'url',
				label: gettext('url')
			},
			NUMBER: {
				type: 'number',
				label: gettext('number')
			},
			DATE: {
				type: 'date',
				label: gettext('date')
			},
			TIME: {
				type: 'time',
				label: gettext('time')
			},
			DATETIME: {
				type: 'datetime',
				label: gettext('datetime')
			},
			COLOR: {
				type: 'color',
				label: gettext('color')
			}
		});
	}

	module.registerService('DocumentInputTypesEnum', DocumentInputTypesEnum);
});
