define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	function DocumentTemplate($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document-templates')
			.mix('Field', {
				name: {
					init: 'New document template'
				},
				version: {
					init: '1'
				},
				versions: {
					init: [{
						version: '1'
					}]
				},
				description: {}
			});
	}

	module.factory('DocumentTemplate', DocumentTemplate);
});
