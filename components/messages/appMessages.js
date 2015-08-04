define(['seed/auth/module'], function (module) {
	'use strict';

	module.service('appMessages', function (gettext, gettextCatalog) {

		var appMessages = {
			data: {},
			type: {
				success: {
					key: gettext('Success'),
					icon: 'fa fa-check fadeIn animated',
					color: '#739E73'
				},
				warning: {
					key: gettext('Warning'),
					icon: 'fa fa-bell swing animated',
					color: '#C79121'
				},
				error: {
					key: gettext('Error'),
					icon: 'fa fa-warning shake animated',
					color: '#C46A69'
				},
				info: {
					key: gettext('Info'),
					icon: 'fa fa-bell swing animated',
					color: '#3276B1'
				}
			},

			boxEnums: {
				BIG: 'bigBox',
				SMALL: 'smallBox'
			},

			hideTime: 2500, //ms

			/**
			 * Description
			 * @method success
			 * @param {} message
			 */
			success: function (message) {
				appMessages.set(appMessages.type.success.key, message);
				appMessages.apply();
			},
			/**
			 * Description
			 * @method warning
			 * @param {} message
			 */
			warning: function (message) {
				appMessages.set(appMessages.type.warning.key, message);
				appMessages.apply();
			},
			/**
			 * Description
			 * @method error
			 * @param {} message
			 */
			error: function (message) {
				appMessages.set(appMessages.type.error.key, message);
				appMessages.apply();
			},

			/**
			 * Description
			 * @method set
			 * @param {} type
			 * @param {} message
			 */
			set: function (type, message) {
				if (angular.isUndefined(appMessages.data[type])) {
					appMessages.data[type] = [];
				}

				if (_.isString(message)) {
					message = {
						message: message,
						boxType: appMessages.boxEnums.SMALL
					};
				}

				appMessages.data[type].push(message);
			},

			/**
			 * Description
			 * @method get
			 * @param {} type ret
			 */
			get: function (type) {
				var ret = false;
				if (!angular.isUndefined(appMessages.data[type]) && appMessages.data[type].length > 0) {
					ret = appMessages.data[type].shift();
				}
				return ret;
			},

			/**
			 * Description
			 * @method getAll
			 * @param {} type ret
			 */
			getAll: function (type) {
				var ret = false;
				if (!angular.isUndefined(appMessages.data[type]) && appMessages.data[type].length > 0) {
					ret = appMessages.data[type];
					appMessages.data[type] = [];
				}

				return ret;
			},

			/**
			 * Description
			 * @method apply
			 */
			apply: function () {
				_.each(appMessages.type, function (type) {
					var msgArray = appMessages.getAll(type.key);
					_.each(msgArray, function (msgObj) {
						var fn = $[msgObj.boxType];
						fn.call(undefined, {
							title: msgObj.title || gettextCatalog.getString(type.key),
							content: msgObj.message || gettextCatalog.getString('Internal server error'),
							color: msgObj.color || type.color,
							timeout: msgObj.timeout || appMessages.hideTime,
							sound: msgObj.sound || false,
							icon: msgObj.icon || type.icon
						});
					});
				});
			}

		};

		return appMessages;
	});
});
