define(['docs/module'], function (module) {
	'use strict';

	//noinspection JSClosureCompilerSyntax
	/**
	 * @class Document
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
	 * @return {*|Model}
	 */
	function Document(restmod, gettext) {
		return restmod
			.model('/document')
			.mix({
				type: {
					init: gettext('document')
				}
			});
	}

	module.registerFactory('Document', Document);
});
