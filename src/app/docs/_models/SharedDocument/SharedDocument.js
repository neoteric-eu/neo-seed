define([
	'docs/module'
], function (module) {
	'use strict';

	//noinspection JSClosureCompilerSyntax
	/**
	 * @class SharedDocument
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model}
	 */
	function SharedDocument($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/documents/share/mine')
			.mix('Document');
	}

	module.factory('SharedDocument', SharedDocument);
});
