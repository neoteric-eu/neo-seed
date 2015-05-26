define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Contains all registered editable field validators.
	 * Used for listing all available validators and as a reference
	 * to actual propertyClasses via Angular Dependency Injection.
	 * @propertyClass FieldValidatorsEnum
	 * @implements {app.BaseEnum}
	 * @memberOf {app.docs}
	 *
	 * @param BaseEnum {Function} Augmentation of enum-type object
	 * @param gettext {Function} Translation helper service
	 * @param $log {Object} Logging service
	 * @return {Function} Enum instance
	 */
	function FieldValidatorsEnum($log, BaseEnum, gettext) {

		$log.debug('Initiated enum object');

		return new BaseEnum({
			EMAIL_ADDRESS: {
				propertyClass: 'EmailAddressValidator',
				formValidationKey: 'emailAddress',
				label: gettext('Email')
			},
			URI: {
				propertyClass: 'UriValidator',
				formValidationKey: 'uri',
				label: gettext('Uri')
			},
			INTEGER: {
				propertyClass: 'IntegerValidator',
				formValidationKey: 'integer',
				label: gettext('Integer')
			},
			STRING_LENGTH: {
				propertyClass: 'StringLengthValidator',
				formValidationKey: 'stringLength',
				label: gettext('String length')
			},
			PHONE: {
				propertyClass: 'PhoneValidator',
				formValidationKey: 'phone',
				label: gettext('Phone')
			},
			DATE: {
				propertyClass: 'DateValidator',
				formValidationKey: 'date',
				label: gettext('Date')
			},
			COLOR: {
				propertyClass: 'ColorValidator',
				formValidationKey: 'color',
				label: gettext('Color')
			},
			NOT_EMPTY: {
				propertyClass: 'NotEmptyValidator',
				formValidationKey: 'notEmpty',
				label: gettext('Required')
			}
		});
	}

	module.service('FieldValidatorsEnum', FieldValidatorsEnum);
});
