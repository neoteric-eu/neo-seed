define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding date field model initial properties
	 * @class DateField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @param ValidatorAPI {Object} Interface for REST communication with server
	 * @param FieldValidatorsEnum {Object} List of all registered field validators
	 * @return {*|Model} Model instance
	 */
	function DateField($log, restmod, gettextCatalog, ValidatorAPI, FieldValidatorsEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/input.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/input-properties.html'
				},
				$inputType: {
					init: 'date'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Date picker');
					}
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
