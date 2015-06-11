define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Polymorphic class being base for all kind of validators user can use in application
	 * @class Validator
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param $injector {Object} Dependency Injector instance
	 * @param restmod {Object} Data model layer interface
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @param RMUtils {Object} Restmod helper utils
	 * @return {*|Model}
	 */
	function Validator($log, $injector, restmod, FieldValidatorsEnum, RMUtils) {
		$log.debug('Created new instance');

		return restmod
			.model()
			.mix({
				isRemovable: {
					init: true,
					mask: true
				},
				validatorType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					chain: true,
					param: FieldValidatorsEnum
				},

				$extend: {
					Scope: {
						// Polymorphism based builder that enhances plain validators with
						// extra properties based on provided validatorType using DI provided classes
						$build: function (_init) {

							// Ensure that injector has the reference class
							if (_.deepHas(_init, 'validatorType.propertyClass') &&
								$injector.has(_init.validatorType.propertyClass)) {

								// Create extended class
								var extendedModel = $injector
									.get(_init.validatorType.propertyClass)
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
						},
						// This method transforms validators collection to form accepted
						// be formValidation jQuery library
						$encapsulateValidators: function () {

							var validators = _.object(_.deepPluck(this, 'validatorType.formValidationKey'), this);

							return {validators: validators};
						}
					},

					Collection: {
						// Forces restmod to encode model using extended class pattens in place of replaced in
						// building/decoding plain models
						$encode: function (_mask) {
							var raw = [];

							_.each(this, function (validator) {
								// Ensure that injector has the reference class
								if (_.deepHas(validator, 'validatorType.propertyClass') &&
									$injector.has(validator.validatorType.propertyClass)) {
									// Inject extended class
									var extendedClass = $injector.get(validator.validatorType.propertyClass);
									// Replace model type
									validator.$type = extendedClass.$type;
								}
								// Encode properly
								raw.push(validator.$encode(_mask));
							});

							this.$dispatch('before-render-many', [raw]);
							return raw;
						},

						// Polymorphic collection encoder that enhances plain validators with
						// extra properties based on provided validatorType using DI provided classes
						$decode: function (_raw, _mask) {
							RMUtils.assert(_raw && angular.isArray(_raw), 'Collection $decode expected array');

							_.each(_raw, function (rawField) {
								// Get enum value to check whether model should be expanded
								var validatorType = FieldValidatorsEnum.getValueByKey(rawField.validatorType);

								if (_.has(validatorType, 'propertyClass')) {

									// Inject extended class
									var extendedClass = $injector.get(validatorType.propertyClass);

									// Build instance
									var model = extendedClass.$buildRaw(rawField, _mask);
									// Override type in order to make collection addable
									model.$type = this.$type;

									this.$add(model);

								} else {
									this.$buildRaw(rawField, _mask).$reveal();
								}
							}, this);

							this.$dispatch('after-feed-many', [_raw]);
							return this;
						}
					}
				}
			});
	}

	module.factory('Validator', Validator);
});
