define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DateFieldProperties
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param fieldsConf {Object} Module configuration
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {{$templateUrl: {init: string}, $inputType: {init: string}, validators: {init: Function}}}
	 */
	function DateFieldProperties($log, fieldsConf, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Initiating properties factory');

		return {
			$templateUrl: {
				init: fieldsConf.FIELD_TEMPLATES_PATH + 'inputField/input.html'
			},
			$inputType: {
				init: 'date'
			},
			validators: {
				init: function () {
					return this.validators
						.$collection()
						.$add(
						ValidatorAPI.build({
							validatorType: FieldValidatorsEnum.DATE,
							$isRemovable: false
						})
					);
				}
			}
		};
	}

	module.factory('DateFieldProperties', DateFieldProperties);
});
