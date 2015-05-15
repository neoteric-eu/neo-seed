define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Contains all registered editable field validators.
	 * Used for listing all available validators and as a reference
	 * to actual propertyClasses via Angular Dependency Injection.
	 * @propertyClass FieldValidatorsEnum
	 * @implements {app.BaseEnum}
	 * @memberOf app.tasks
	 *
	 * @param {Function} BaseEnum Augmentation of enum-type object
	 * @param {Function} gettext Translation helper service
	 * @param $log {Object} Logging service
	 * @return {Function} Enum instance
	 */
	function FieldValidatorsEnum($log, BaseEnum, gettext) {

		$log.debug('Initiated enum object');

		return new BaseEnum({
			EMAIL_ADDRESS: {
				propertyClass: 'EmailAddressValidator',
				label: gettext('Email')
			},
			URI: {
				propertyClass: 'UriValidator',
				label: gettext('Uri')
			},
			INTEGER: {
				propertyClass: 'IntegerValidator',
				label: gettext('Integer')
			},
			STRING_LENGTH: {
				propertyClass: 'StringLengthValidator',
				label: gettext('String length')
			},
			PHONE: {
				propertyClass: 'PhoneValidator',
				label: gettext('Phone')
			},
			DATE: {
				propertyClass: 'DateValidator',
				label: gettext('Date')
			},
			COLOR: {
				propertyClass: 'ColorValidator',
				label: gettext('Color')
			},
			NOT_EMPTY: {
				propertyClass: 'NotEmptyValidator',
				label: gettext('Required')
			}
		});
	}

	module.service('FieldValidatorsEnum', FieldValidatorsEnum);
});
