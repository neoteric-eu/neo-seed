define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model}
	 */
	function DocumentTemplate($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document-templates')
			.mix('Field', {
				label: {
					init: 'New document template'
				},
				description: {}
			});
	}

	module.factory('DocumentTemplate', DocumentTemplate);
});
