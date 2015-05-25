define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class PhoneField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param fieldsConf {Object} Module configuration
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {*|Model}
	 */
	function PhoneField($log, restmod, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'input.html'
				},
				$inputType: {
					init: 'tel'
				},
				$hooks: {
					'after-init': function () {
						this.validators.$add(
							ValidatorAPI.build({
								validatorType: FieldValidatorsEnum.PHONE,
								isRemovable: false
							})
						);
					}
				}
			});
	}

	module.factory('PhoneField', PhoneField);
});
