define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding color field model initial properties
	 * @class ColorField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {*|Model} Model instance
	 */
	function ColorField($log, restmod, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: '/app/docs/_directives/docsField/fields/input.html'
				},
				$inputType: {
					init: 'color'
				},
				$hooks: {
					'after-init': function () {
						this.validators.$add(
							ValidatorAPI.build({
								validatorType: FieldValidatorsEnum.COLOR,
								isRemovable: false
							})
						);
					}
				}
			});
	}

	module.factory('ColorField', ColorField);
});
