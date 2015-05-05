define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentFieldTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @param {Function} gettext Translation helper service
	 * @param $log {Object} Console log provider
	 * @param EmailField {Object} Model factory
	 * @param UrlField {Object} Model factory
	 * @param TextareaField {Object} Model factory
	 * @param TextField {Object} Model factory
	 * @param NumberField {Object} Model factory
	 * @param TelephoneField {Object} Model factory
	 * @param DateField {Object} Model factory
	 * @param TimeField {Object} Model factory
	 * @param ColorField {Object} Model factory
	 * @param SelectField {Object} Model factory
	 * @param MultiselectField {Object} Model factory
	 * @return {Function} Enum instance
	 */
	function DocumentFieldTypesEnum($log, BaseEnum, gettext,
	                                EmailField, UrlField, TextareaField,
	                                TextField, NumberField, TelephoneField,
	                                DateField, TimeField,
	                                ColorField, SelectField, MultiselectField) {
		$log.debug('Initiated enum object');

		return new BaseEnum({
			EMAIL: {
				class: EmailField,
				label: gettext('Email'),
				group: gettext('Text')
			},
			URL: {
				class: UrlField,
				label: gettext('Url'),
				group: gettext('Text')
			},
			TEXTAREA: {
				class: TextareaField,
				label: gettext('Textarea'),
				group: gettext('Text')
			},
			TEXT: {
				class: TextField,
				label: gettext('Text input'),
				group: gettext('Text')
			},
			NUMBER: {
				class: NumberField,
				label: gettext('Number'),
				group: gettext('Numeric')
			},
			TELEPHONE: {
				class: TelephoneField,
				label: gettext('Phone'),
				group: gettext('Numeric')
			},
			DATE: {
				class: DateField,
				label: gettext('Date'),
				group: gettext('Date & Time')
			},
			TIME: {
				class: TimeField,
				label: gettext('Time'),
				group: gettext('Date & Time')
			},
			COLOR: {
				class: ColorField,
				label: gettext('Color picker'),
				group: gettext('Custom')
			},
			SELECT: {
				class: SelectField,
				label: gettext('Select'),
				group: gettext('Selection')
			},
			MULTI_SELECT: {
				class: MultiselectField,
				label: gettext('Multi-select'),
				group: gettext('Selection')
			}
		});
	}

	module.service('DocumentFieldTypesEnum', DocumentFieldTypesEnum);
});
