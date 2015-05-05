define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
	 * @return {*|Model}
	 */
	function DocumentTemplate($log, restmod, gettext) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document-templates')
			.mix('Document', {
				name: {
					init: ''
				},
				description: {
					inti: ''
				},
				type: {
					init: gettext('document template')
				}
			});
	}

	module.factory('DocumentTemplate', DocumentTemplate);
});
