define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Field
	 * @implements {app.BaseModel}
	 * @mixin
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function Field($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model()
			.mix({
				$isEditorCollapsed: {
					init: true
				},
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

	module.factory('Field', Field);
});
