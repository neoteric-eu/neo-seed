define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentFieldTypesEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @param {Function} gettext Translation helper service
	 * @param EmailField
	 * @param UrlField
	 * @param TextareaField
	 * @param TextField
	 * @param NumberField
	 * @param TelephoneField
	 * @param DateField
	 * @param TimeField
	 * @param DatetimeField
	 * @param ColorField
	 * @param SelectField
	 * @param MultiselectField
	 * @return {Function} Enum instance
	 */
	function DocumentFieldTypesEnum(BaseEnum, gettext,
	                                EmailField, UrlField, TextareaField,
	                                TextField, NumberField, TelephoneField,
	                                DateField, TimeField, DatetimeField,
	                                ColorField, SelectField, MultiselectField) {
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
			DATETIME: {
				class: DatetimeField,
				label: gettext('Datetime'),
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

	module.registerService('DocumentFieldTypesEnum', DocumentFieldTypesEnum);
});
