define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param docsModuleConf {Object} Module configuration
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {*|Model}
	 */
	function ColorField($log, restmod, docsModuleConf, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: docsModuleConf.FIELD_TEMPLATES_PATH + 'input.html'
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
