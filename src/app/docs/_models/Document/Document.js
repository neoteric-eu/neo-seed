define(['docs/module'], function (module) {
	'use strict';

	//noinspection JSClosureCompilerSyntax
	/**
	 * @class Document
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param gettext {Function} Translation service
	 * @return {*|Model}
	 */
	function Document($log, restmod, gettext) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/document')
			.mix({
				type: {
					init: gettext('document')
				}
			});
	}

	module.factory('Document', Document);
});
