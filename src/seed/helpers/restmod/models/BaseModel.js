define(['seed/module'], function (app) {
	'use strict';

	/**
	 * Restmod base model for all instances
	 * @class BaseModel
	 * @interface
	 * @implements {seed.BaseAPI}
	 * @memberOf seed
	 *
	 * @param restmod
	 * @return {Object}
	 */
	function BaseModel(restmod) {
		return restmod.mixin({
			createdAt: {
				encode: 'DatetimeEncode',
				decode: 'DatetimeDecode',
				mask: 'CU'
			},

			updatedAt: {
				encode: 'DatetimeEncode',
				decode: 'DatetimeDecode',
				mask: 'CU'
			},

			$extend: {
				Model: {
					/**
					 * Description
					 * @method encodeUrlName
					 * @param {String} _name
					 * @return {String} _name
					 */
					encodeUrlName: function (_name) {
						return _name;
					}
				}
			}
		});
	}

	app.factory('BaseModel', BaseModel);
});
