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
		$log.debug('Initiating model factory');

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
						// Polymorphism based builder that enhances plain validators with
						// extra properties based on provided validatorType using DI provided classes
						$build: function (_init) {

							// Ensure that injector has the reference class
							if (_.deepHas(_init, 'validatorType.propertyClass') &&
								$injector.has(_init.validatorType.propertyClass)) {
								this.mix($injector.get(_init.validatorType.propertyClass));
								$log.debug('Creating field extended by additional properties');
							} else {
								$log.error('Unsupported injectable field class');
							}

							return this.$super(_init);
						}
					},

					Collection: {
						$add: function (_obj, _idx) {
							if (_.findWhere(this, {validatorType: _obj.validatorType})) {
								return this;
							} else {
								return this.$super(_obj, _idx);

							}
						}
					}
				}
			});
	}

	module.factory('Validator', Validator);
});
