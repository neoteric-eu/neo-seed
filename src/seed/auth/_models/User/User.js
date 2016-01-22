define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param $http {$http} The $http service is a core Angular service that facilitates communication with the remote
	 * HTTP servers via the browser's XMLHttpRequest object or via JSONP.
	 * @param $cookies {Function} Cookie service
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, $http, $cookies) {
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
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$logout: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/logout'
							}, function (_response) {
								this.$unwrap(_response.data, null);
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
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						}
					},
					Model: {
						$passwordResetInit: function (email) {
							return $http({
								method: 'POST',
								url: this.$url() + '/password/reset/init',
								data: {
									email: email
								}
							});
						},
						$passwordResetFinish: function (token, password) {
							return $http({
								method: 'POST',
								url: this.$url() + '/password/reset/finish',
								data: {
									token: token,
									newPassword: password
								}
							});
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
