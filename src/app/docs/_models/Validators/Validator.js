define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Validator
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log Logging service
	 * @param $injector {Object} Dependency Injector instance
	 * @param restmod Data model layer interface
	 * @param FieldValidatorsEnum {Object} List of registered field validators
	 * @return {*|Model}
	 */
	function Validator($log, $injector, restmod, FieldValidatorsEnum) {
		$log.debug('Created new instance');

		function buildExtendedModel(_baseModel, _initProperties) {
			// Create extended class
			var extendedModel = $injector
				.get(_initProperties.validatorType.propertyClass)
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
				isRemovable: {
					init: true,
					mask: true
				},
				validatorType: {
					encode: 'EnumEncode',
					decode: 'EnumDecode',
					param: FieldValidatorsEnum
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
								if (_.deepHas(model, 'validatorType.propertyClass') &&
									$injector.has(model.validatorType.propertyClass)) {

									this[index] = buildExtendedModel(model, model);
								}
							}, this);


							this.$resolved = true;
							return this;
						},
						// Polymorphism based builder that enhances plain validators with
						// extra properties based on provided validatorType using DI provided classes
						$build: function (_init) {

							// Ensure that injector has the reference class
							if (_.deepHas(_init, 'validatorType.propertyClass') &&
								$injector.has(_init.validatorType.propertyClass)) {

								return buildExtendedModel(this, _init);
							} else {
								$log.debug('Created plain model');

								return this.$super(_init);
							}
						}
					},

					Collection: {
						// This method transforms validators collection to form accepted
						// be formValidation jQuery library
						$encapsulateValidators: function () {

							var validators = _.object(_.deepPluck(this, 'validatorType.formValidationKey'), this);

							return {validators: validators};
						}
					}
				}
			});
	}

	module.factory('Validator', Validator);
});
