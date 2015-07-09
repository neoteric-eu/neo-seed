define([
	'docs/module'
], function (module) {
	'use strict';

	/**
	 * @class DocumentSharing
	 * @implements {app.BaseModel}
	 * @memberOf app.docs
	 *
	 * @param $log {Object} Console log provider
	 * @param restmod {Object} Data model layer interface
	 * @param PermissionTypesEnum
	 * @return {*|Model}
	 */
	function DocumentSharing($log, restmod, PermissionTypesEnum) {
		$log.debug('Initiating model factory');

		return restmod
			.model('/documents/share')
			.mix({
				privilege: {
					type: {
						encode: 'EnumEncode',
						decode: 'EnumDecode',
						param: PermissionTypesEnum
					}
				},
				$extend: {
					Record: {
						$share: function() {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/' + this.id,
								data: this.$encode()
							});
						}
					}
				}
			});
	}

	module.factory('DocumentSharing', DocumentSharing);
});
