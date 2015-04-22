define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class Project
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
	 * @return {*|Model}
	 */
	function DocumentTemplate(restmod, gettext) {
		return restmod
			.model('/document-templates')
			.mix({
				type: {
					init: gettext('project')
				}
			});
	}

	module.registerFactory('DocumentTemplate', DocumentTemplate);
});
