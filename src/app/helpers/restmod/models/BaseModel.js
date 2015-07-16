define(['app'], function (app) {
	'use strict';

	/**
	 * Restmod base model for all instances
	 * @class BaseModel
	 * @interface
	 * @implements {app.BaseAPI}
	 * @memberOf app
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
			},

			$hooks: {
				'before-request': function (_req) {
					if (_.has(ipCookie('activeCustomer'), 'customerId')) {
						_req.headers = _.extend(_req.headers, {
							'X-Customer-Id': localStorageService.cookie.get('activeCustomer').customerId,
							'Authorization': 'token ' + $rootScope.token
						});
					}
				}
			}
		});
	}

	app.registerFactory('BaseModel', BaseModel);
});
