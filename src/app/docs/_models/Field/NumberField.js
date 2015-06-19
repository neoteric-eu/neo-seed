define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding number field model initial properties
	 * @class NumberField
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
	function NumberField($log, restmod, gettextCatalog, ValidatorAPI, FieldValidatorsEnum) {

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
					init: 'number'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Number');
					}
				},

				$hooks: {
					'after-init': function () {
						this.validators.$add(
							ValidatorAPI.build({
								validatorType: FieldValidatorsEnum.INTEGER,
								isRemovable: false
							})
						);
					}
				}
			});
	}

	module.factory('NumberField', NumberField);
});
