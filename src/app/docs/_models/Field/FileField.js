define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding file field model initial properties
	 * @class FileField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @return {*|Model} Model instance
	 */
	function FileField($log, restmod, gettextCatalog) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/input.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/input-properties.html'
				},
				$inputType: {
					init: 'file'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Attachment');
					}
				}
			});
	}

	module.factory('FileField', FileField);
});
