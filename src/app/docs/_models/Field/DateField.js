define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateField
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
	function DateField($log, restmod, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Initialized model factory');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: fieldsConf.FIELD_TEMPLATES_PATH + 'input.html'
				},
				$inputType: {
					init: 'date'
				},
				$hooks: {
					'after-init': function () {
						this.validators.$add(
							ValidatorAPI.build({
								validatorType: FieldValidatorsEnum.DATE,
								isRemovable: false
							})
						);
					}
				}
			});
	}

	module.factory('DateField', DateField);
});
