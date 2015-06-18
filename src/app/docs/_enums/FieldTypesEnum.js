define(['docs/module'], function (module) {
	'use strict';

	/**
	 * List of all registered pre-defined field types that can be added to a form.
	 * Used for fields listing and data dynamic form manipulation by mapping propertyClass
	 * property to Angular models via Dependency Injection.
	 * @class FieldTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf {app.docs}
	 *
	 * @param BaseEnum {Function}  Augmentation of enum-type object
	 * @param gettext {Function} Translation helper service
	 * @param $log {Object} Logging service
	 * @return {Function} Enum instance
	 */
	function FieldTypesEnum($log, BaseEnum, gettext) {
		$log.debug('Initiated enum object');

		return new BaseEnum({
			COMPOSITE: {
				group: gettext('Composite')
			},
			EMAIL: {
				propertyClass: 'EmailField',
				label: gettext('Email'),
				group: gettext('Text')
			},
			URL: {
				propertyClass: 'UrlField',
				label: gettext('Url'),
				group: gettext('Text')
			},
			TEXTAREA: {
				propertyClass: 'TextareaField',
				label: gettext('Textarea'),
				group: gettext('Text')
			},
			TEXT: {
				propertyClass: 'TextField',
				label: gettext('Text input'),
				group: gettext('Text')
			},
			FILE: {
				propertyClass: 'FileField',
				label: gettext('File'),
				group: gettext('Custom')
			},
			NUMBER: {
				propertyClass: 'NumberField',
				label: gettext('Number'),
				group: gettext('Numeric')
			},
			PHONE: {
				propertyClass: 'PhoneField',
				label: gettext('Phone'),
				group: gettext('Numeric')
			},
			DATE: {
				propertyClass: 'DateField',
				label: gettext('Date'),
				group: gettext('Date & Time')
			},
			TIME: {
				propertyClass: 'TimeField',
				label: gettext('Time'),
				group: gettext('Date & Time')
			},
			COLOR: {
				propertyClass: 'ColorField',
				label: gettext('Color picker'),
				group: gettext('Custom')
			},
			SELECT: {
				propertyClass: 'SelectField',
				label: gettext('Select'),
				group: gettext('Selection')
			},
			MULTI_SELECT: {
				propertyClass: 'MultiselectField',
				label: gettext('Multi-select'),
				group: gettext('Selection')
			}
		});
	}

	module.service('FieldTypesEnum', FieldTypesEnum);
});
