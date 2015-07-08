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

				// MODEL CONFIGURATION
				$config: {
					name: 'ColorField'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				$templateUrl: {
					init: 'app/docs/_directives/docsField/fields/file.html'
				},
				$propertiesUrl: {
					init: 'app/docs/_directives/docsFieldProperties/input-properties.html'
				},
				$inputType: {
					init: 'file'
				},
				$progress: {
					init: 0
				},
				value: {
					hasOne: 'Attachment'
				},
				label: {
					init: function () {
						return gettextCatalog.getString('Attachment');
					}
				},

				// HOOKS
				$hooks: {
					// Ensure that composite models are encoded in order to allow recurrence
					// saving with one request made
					'before-render': function (raw) {
						if (!_.isEmpty(this.value)) {
							raw.value = this.value.$encode(null);
						}
					}
				}
				// METHODS
			});
	}

	module.factory('FileField', FileField);
});
