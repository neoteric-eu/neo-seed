define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class UrlField
	 * @mixes {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @return {*|Model}
	 */
	function UrlField(restmod) {
		return restmod
			.model()
			.mix('Field', {
				fieldType: {
					init: 'URL'
				}
			});
	}

	module.registerFactory('UrlField', UrlField);
});
