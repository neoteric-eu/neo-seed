define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param restmod
	 * @param ipCookie
	 * @return {*|Model}
	 * @constructor
	 */
	var User = function (restmod, ipCookie) {
		//noinspection JSUnusedGlobalSymbols
		return restmod
			.model('/users')
			.mix('UserPacker', {
				customers: {
					hasMany: 'Customer'
				},
				language: {
					hasOne: 'Language'
				},
				password: {
					volatile: true
				},
				avatar: {
					init: 'assets/img/avatars/sunny-big.png'
				},

				$config: {
					urlPrefix: ' http://ntrc-delta.neoteric.eu:9000/api/v1/',
					jsonMeta: '.'
				},

				$extend: {
					Resource: {
						$login: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/login',
								data: {
									login: this.login,
									password: this.password
								}
							}, function (_data) {
								this.$unwrap(_data.data, null);
							}, null);
						},

						$logout: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/logout'
							}, function (_data) {
								this.$unwrap(_data.data, null);
							}, null);
						},

						$authInfo: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'GET',
								url: this.$scope.$url() + '/authInfo',
								cache: true,
								data: {
									token: ipCookie('token')
								}
							}, function (_data) {
								this.$unwrap(_data.data);
							}, null);
						}
					},

					Record: {
						/**
						 * Return user's concatenated name and surname
						 * @method getFullName
						 * @return {string}
						 */
						getFullName: function () {
							if (this.firstName && this.lastName) {
								return this.firstName + ' ' + this.lastName;
							}
						}
					}
				}
			});
	};

	module.factory('User', User);
});
