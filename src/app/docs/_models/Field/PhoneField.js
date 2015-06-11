define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding phone field model initial properties
	 * @class PhoneField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {*|Model} Model instance
	 */
	function PhoneField($log, restmod, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: '/app/docs/_directives/docsField/fields/input.html'
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
