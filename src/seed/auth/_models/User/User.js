define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.helpers.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @param $cookies {Function} Cookie service
	 * @param neoLanguage {seed.auth.neoLanguage} Language service
	 * @return {*|Model} Model instance
	 */
	var User = function (restmod, $cookies, neoLanguage, activeLanguage) {
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