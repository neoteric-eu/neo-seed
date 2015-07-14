define(['docs/module'], function (module) {
	'use strict';

	/**
	 * @class DocumentTemplate
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Data model layer interface
	 * @param VersionAPI {Object} Interface for REST communication with server
	 * @return {*|Model} Model instance
	 */
	function DocumentTemplate($log, restmod, VersionAPI) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document-templates')
			.mix('Field', {

				// MODEL CONFIGURATION
				$config: {
					name: 'DocumentTemplate'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				name: {
					init: 'New document template'
				},
				version: {
					init: '1'
				},
				versions: {
					hasMany: 'Version'
				},

				// hooks
				$hooks: {
					'after-init': function () {
						this.versions.$add(
							VersionAPI.build({
								version: 1
							})
						);
					}
				}

				// HOOKS
				// METHODS
			});
	}

	module.factory('DocumentTemplate', DocumentTemplate);
});
