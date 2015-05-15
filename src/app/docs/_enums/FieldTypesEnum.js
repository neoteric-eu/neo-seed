define(['docs/module'], function (module) {
	'use strict';

	/**
	 * List of all registered pre-defined field types that can be added to a form.
	 * Used for fields listing and data dynamic form manipulation by mapping propertyClass
	 * property to Angular models via Dependency Injection.
	 * @propertyClass FieldTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @param {Function} gettext Translation helper service
	 * @param $log {Object} Logging service
	 * @return {Function} Enum instance
	 */
	function FieldTypesEnum($log, BaseEnum, gettext) {
		$log.debug('Initiated enum object');

		return new BaseEnum({
			COMPOSITE: {},
			EMAIL: {
				propertyClass: 'EmailFieldProperties',
				label: gettext('Email'),
				group: gettext('Text')
			},
			URL: {
				propertyClass: 'UrlFieldProperties',
				label: gettext('Url'),
				group: gettext('Text')
			},
			TEXTAREA: {
				propertyClass: 'TextareaFieldProperties',
				label: gettext('Textarea'),
				group: gettext('Text')
			},
			TEXT: {
				propertyClass: 'TextField',
				label: gettext('Text input'),
				group: gettext('Text')
			},
			NUMBER: {
				propertyClass: 'NumberFieldProperties',
				label: gettext('Number'),
				group: gettext('Numeric')
			},
			PHONE: {
				propertyClass: 'PhoneFieldProperties',
				label: gettext('Phone'),
				group: gettext('Numeric')
			},
			DATE: {
				propertyClass: 'DateFieldProperties',
				label: gettext('Date'),
				group: gettext('Date & Time')
			},
			TIME: {
				propertyClass: 'TimeFieldProperties',
				label: gettext('Time'),
				group: gettext('Date & Time')
			},
			COLOR: {
				propertyClass: 'ColorFieldProperties',
				label: gettext('Color picker'),
				group: gettext('Custom')
			},
			SELECT: {
				propertyClass: 'SelectFieldProperties',
				label: gettext('Select'),
				group: gettext('Selection')
			},
			MULTI_SELECT: {
				propertyClass: 'MultiselectFieldProperties',
				label: gettext('Multi-select'),
				group: gettext('Selection')
			}
		});
	}

	module.service('FieldTypesEnum', FieldTypesEnum);
});
