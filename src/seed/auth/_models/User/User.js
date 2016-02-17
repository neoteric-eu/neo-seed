define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param $cookies {Function} Cookie service
	 * @param LanguageAPI {seed.auth.LanguageAPI} Language service
	 * @param appConf {Object} Application configuration
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, $cookies, LanguageAPI, appConf) {
		//noinspection JSUnusedGlobalSymbols
		return restmod
			.model('/users')
			.mix('UserPacker', {
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
						return LanguageAPI.getByLocale(locale);
					},
					init: function(){
						return LanguageAPI.getLanguage().localePOSIX;
					}
				},
				password: {
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
						},

						$register: function () {
							//noinspection JSUnresolvedFunction
							return this.$send({
								method: 'POST',
								url: appConf.environmentSettings.apiUrl + 'registration',
								data: this
							}, function (_response) {
								this.$unwrap(_response.data, null);
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
