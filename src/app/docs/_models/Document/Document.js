define(['docs/module'], function (module) {
	'use strict';

	//noinspection JSClosureCompilerSyntax
	/**
	 * @class Document
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log Console log provider
	 * @param restmod Data model layer interface
	 * @param gettext Translation service
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
