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

		function buildExtendedModel(_baseModel, _initProperties) {
			// Create extended class
			var extendedModel = $injector
				.get(_initProperties.fieldType.propertyClass)
				.$build();

			// Override type in order to make instances looks the same for collections
			extendedModel.$type = _baseModel.$type;
			// Make sure the polymorphic properties are rewritten
			extendedModel.$extend(_initProperties);

			$log.debug('Created field extended by additional properties');
			return extendedModel;
		}

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
						$decode: function (_raw, _mask) {
							if (this.$resolved === false && this.$clear) {
								this.$clear();
							} // clear if not resolved.

							// Instantiate normally the collection
							this.$super(_raw, _mask);

							// Replace the model if ought to extended
							// Make sure we are not creating ghosts
							_.each(this, function (model, index) {
								// Check if field is expendable
								if (_.deepHas(model, 'fieldType.propertyClass') &&
									$injector.has(model.fieldType.propertyClass)) {
									this[index] = buildExtendedModel(this, model);
								}
							}, this);

							this.$resolved = true;

							return this;
						},
						// Polymorphism based builder that enhances plain field with
						// extra properties based on provided fieldType using DI provided classes
						$build: function (_init) {

							// Check if field is expendable
							if (_.deepHas(_init, 'fieldType.propertyClass') &&
								$injector.has(_init.fieldType.propertyClass)) {

								return buildExtendedModel(this, _init);
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
