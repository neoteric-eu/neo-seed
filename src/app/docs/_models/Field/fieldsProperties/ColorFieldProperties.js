define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class ColorFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {{$templateUrl, $inputType, validators}}
	 */
	function ColorFieldProperties($log, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'inputField/input.html'
			},
			$inputType: {
				init: 'color'
			},
			validators: {
				init: function () {
					return this.validators
						.$collection()
						.$add(
						ValidatorAPI.build({
							validatorType: FieldValidatorsEnum.COLOR,
							isRemovable: false
						})
					);
				}
			}
		};
	}

	module.factory('ColorFieldProperties', ColorFieldProperties);
});
