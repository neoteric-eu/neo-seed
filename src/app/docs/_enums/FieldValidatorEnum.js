define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Contains all registered editable field validators.
	 * Used for listing all available validators and as a reference
	 * to actual classes via Angular Dependency Injection.
	 * @class FieldValidatorsEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @param {Function} gettext Translation helper service
	 * @param $log {Object} Console log provider
	 * @return {Function} Enum instance
	 */
	function FieldValidatorsEnum($log, BaseEnum, gettext) {

		$log.debug('Initiated enum object');

		return new BaseEnum({
			EMAIL: {
				class: 'EmailAddressValidator',
				label: gettext('Email')
			},
			URI: {
				class: 'UriValidator',
				label: gettext('Uri')
			},
			INTEGER: {
				class: 'IntegerValidator',
				label: gettext('Integer')
			},
			STRING_LENGTH: {
				class: 'StringLengthValidator',
				label: gettext('String length')
			},
			PHONE: {
				class: 'PhoneValidator',
				label: gettext('Phone')
			},
			DATE: {
				class: 'StringLengthValidator',
				label: gettext('Date')
			},
			COLOR: {
				class: 'ColorValidator',
				label: gettext('Color')
			},
			REQUIRED: {
				class: 'NotEmptyValidator',
				label: gettext('Required')
			}
		});
	}

	module.service('FieldValidatorsEnum', FieldValidatorsEnum);
});
