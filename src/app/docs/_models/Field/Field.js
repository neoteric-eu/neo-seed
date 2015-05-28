define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Polymorphic class storing all kind of field user can use in application.
	 * @class Field
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Dependency Injector instance
	 * @param FieldTypesEnum {Object} Available primitive fields enum
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model}
	 */
	function Field($log, $injector, restmod, FieldTypesEnum) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix({
				$isEditorCollapsed: {
					init: true
				},
				$name: {
					init: function () {
						return _.uniqueId('field_');
					}
				},
				readOnly: {
					init: false
				},
				label: {},
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
						if (!_.isEmpty(this.composite)) {
							raw.composite = this.composite.$encode(null);
						}
						if (!_.isEmpty(this.validators)) {
							raw.validators = this.validators.$encode(null);
						}
					}
				},

				$extend: {
					Scope: {
						$buildRaw: function (_raw) {
							var initProperties = _.extend(_raw, {
								fieldType: FieldTypesEnum.getValueByKey(_raw.fieldType)
							});

							var extendedModel = this.$build(initProperties);

							return extendedModel;
						},
						// Polymorphism based builder that enhances plain field with
						// extra properties based on provided fieldType using DI provided classes
						$build: function (_init) {

							// Check if field is expendable
							if (_.deepHas(_init, 'fieldType.propertyClass') &&
								$injector.has(_init.fieldType.propertyClass)) {

								// Create extended class
								var extendedModel = $injector
									.get(_init.fieldType.propertyClass)
									.$new();

								// Override type in order to make instances looks the same for collections
								extendedModel.$type = this.$type;
								// Make sure the polymorphic properties are rewritten
								extendedModel.$extend(_init);

								$log.debug('Created field extended by additional properties');

								return extendedModel;
							} else {
								$log.debug('Created plain model');

								return this.$super(_init);
							}

						}
					}
				}
			});
	}

	module.factory('Field', Field);
});
