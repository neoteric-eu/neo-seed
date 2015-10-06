define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param $cookies {Function} Cookie service
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, $cookies) {
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
					init: 'assets/seed/img/avatar-default.png'
				},
				$config: {
					jsonMeta: '.',
					urlPrefix: 'http://mordor.neoteric.eu:4300/api/v2/'
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
							}, function(_response) {
								this.$unwrap(_response.data.data, null);
							}, null);
						},

						$logout: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/logout'
							}, function(_response) {
								this.$unwrap(_response.data.data, null);
							}, null);
						},

						$authInfo: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'GET',
								url: this.$scope.$url() + '/authInfo',
								cache: true,
								data: {
									token: $cookies.getObject('token')
								}
							}, function(_response) {
								this.$unwrap(_response.data.data, null);
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
