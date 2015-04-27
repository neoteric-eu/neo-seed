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
				label: {
					init: ''
				},
				defaultValue: {
					init: ''
				},
				note: {
					init: ''
				},
				required: {
					init: false
				},
				disabled: {
					init: false
				}
			});
	}

	module.registerFactory('Field', Field);
});
