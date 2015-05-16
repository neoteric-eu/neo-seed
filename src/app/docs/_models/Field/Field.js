define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Polymorphic class storing all kind of field user can use in application.
	 * @class Field
	 * @implements {app.BaseModel}
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Dependency Injector instance
	 * @param FieldTypesEnum {Object} Available primitive fields enum
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model}
	 */
	function Field($log, $injector, restmod, FieldTypesEnum) {

		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				$isEditorCollapsed: {
					init: true
				},
				$name: {
					init: function () {
						return _.uniqueId();
					}
				},
				readOnly: {
					init: false
				},
				label: {
					init: ''
				},
				composite: {
					hasMany: 'Field'
				},
				validators: {
					hasMany: 'Validator'
				},
				fieldType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldTypesEnum
				},
				$hooks: {
					// Ensure that composite models are encoded in order to allow recurrence
					// saving with one request made
					'before-render': function (raw) {
						raw.composite = this.composite.$encode();
					}
				},
				$extend: {
					Scope: {
						// Polymorphism based builder that enhances plain field with
						// extra properties based on provided fieldType using DI provided classes
						$build: function (_init) {

							// Return simple field instance when fieldType is not set
							if (!_.deepHas(_init, 'fieldType.propertyClass')) {
								$log.debug('Creating plain model');
								return this.$super(_init);
							}

							// Ensure that injector has the reference class
							if ($injector.has(_init.fieldType.propertyClass)) {
								var additionalProperties = $injector.get(_init.fieldType.propertyClass);
								this.mix(additionalProperties);

								$log.debug('Creating field extended by additional properties');

								return this.$super(_init);
							} else {
								$log.error('Unsupported injectable field class');
							}

						}
					},

					Record: {
						// This method transforms validators collection to form accepted
						// be formValidation jQuery library
						$encapsulateValidators: function () {
							var validators = _.transform(this.validators, function (result, item, name) {
								result[item['validatorType']] = result[item['validatorType']] || {};
								result[item['validatorType']][name] = item;
							});

							return {validators: validators};
						}
					}
				}
			});
	}

	module.factory('Field', Field);
});
