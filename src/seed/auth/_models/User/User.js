define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param neoLanguage {seed.auth.neoLanguage} Language service
	 * @param activeLanguage {seed.auth.activeLanguage}
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, neoLanguage, activeLanguage) {
		//noinspection JSUnusedGlobalSymbols
		return restmod
			.model('/users')
			.mix('UserPacker', {
				type: {
					init: 'User'
				},
				email: {
					init: undefined
				},
				customers: {
					hasMany: 'Customer'
				},
				language: {
					encode: function (lang) {
						return lang.localePOSIX;
					},
					decode: function (locale) {
						return neoLanguage.getLanguageByLocale(locale);
					},
					init: function () {
						return activeLanguage.localePOSIX;
					}
				},
				timezone: {
					init: undefined
				},
				password: {
					volatile: true
				},
				repassword: {
					mask: true
				},
				token: {
					volatile: true
				},
				requireConfirmation: {
					init: false
				},
				acceptTermsOfService: {
					init: false
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
							});
						},

						$authInfo: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'GET',
								url: this.$scope.$url() + '/authInfo',
								cache: true
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$register: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: this.$scope.getProperty('urlPrefix') + '/registration',
								data: this
							}, function (_response) {
								this.$unwrap(_response.data, null);
							}, null);
						},

						$passwordResetInit: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/password/reset/init',
								data: {
									email: this.email
								}
							});
						},

						$passwordReset: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/password/reset/finish',
								data: {
									token: this.token,
									newPassword: this.password
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