define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Field
	 * @implements {app.BaseModel}
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function Field(restmod) {
		return restmod
			.model()
			.mix({
				$pk: {
					init: function(){
						return _.uniqueId();
					}
				},
				label: {
					init: ''
				},
				defaultValue: {
					init: ''
				},
				validators: {
					decode: 'FieldValidatorDecode',
					encode: 'FieldValidatorEncode'
				}
			});
	}

	module.registerFactory('Field', Field);
});
