define([
	'docs/module'
], function (module) {
	'use strict';

	/**
	 * @class Attachment
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	function Attachment($log, restmod) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/attachments')
			.mix({

				// MODEL CONFIGURATION
				$config: {
					name: 'Attachment'
				},

				// ATTRIBUTE MODIFIERS AND RELATIONS
				// HOOKS

				// METHODS
				$extend: {
					Record: {
						$download: function () {
							return this.$send({
								method: 'GET',
								responseType: 'arraybuffer',
								url: this.$scope.$urlFor(this),
								data: this
							});
						}
					}
				}
			});
	}

	module.factory('Attachment', Attachment);
});
