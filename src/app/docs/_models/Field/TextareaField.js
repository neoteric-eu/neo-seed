define(['docs/module'], function (module) {
	'use strict';

	/**
	 * Defines extend class of Field holding text-area field model initial properties
	 * @class TextareaField
	 * @extends {app.docs.Field}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Logging service
	 * @param restmod {Object} Object Relational Mapper interface
	 * @param gettextCatalog {Object} Translated text's catalog provider
	 * @return {*|Model} Model instance
	 */
	function TextareaField($log, restmod, gettextCatalog) {

		$log.debug('Created new instance');

		return restmod
			.model()
			.mix('Field', {
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/textarea.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/textarea-properties.html'
				},

				label: {
					init: function () {
						return gettextCatalog.getString('Textarea');
					}
				}
			});
	}

	module.factory('TextareaField', TextareaField);
});
