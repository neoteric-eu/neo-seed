define(['seed/helpers/module'], function (app) {
	'use strict';

	/**
	 * Restmod base model for all instances
	 * @class BaseModel
	 * @interface
	 * @implements {seed.helpers.BaseAPI}
	 * @memberOf seed.helpers
	 *
	 * @param restmod
	 * @return {Object}
	 */
	function BaseModel(restmod) {
		return restmod.mixin({
			createdAt: {
				serialize: 'Datetime',
				mask: 'CU'
			},

			updatedAt: {
				serialize: 'Datetime',
				mask: 'CU'
			},

			$extend: {
				Model: {
					encodeUrlName: function (_name) {
						return _name;
					}
				}
			}
		});
	}

	app.factory('BaseModel', BaseModel);
});
