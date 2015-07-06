define(['auth/module'], function (module) {
	'use strict';

	function User(restmod, ipCookie) {
		/**
		 * Data model
		 * @example
		 *  {
		 *    "id": "5357699c9d33da5ee72b45ce",
		 *    "email": "admin@preiscoin.com",
		 *    "passwordHash": "51b112a6cc1c05e56e923d0f22ac84303d7d7c4e9459aa46b356ccfb86c99882",
		 *    "phoneNumber": "",
		 *    "userStatus": "ACTIVE",
		 *    "firstName": "System-admin",
		 *    "lastName": "System-admin",
		 *    "createdOn": "2014-06-16T16:17:00.796+02:00",
		 *    "lastPassChange": null,
		 *    "language": "EN",
		 *    "newsletter": false,
		 *    "termsOfService": null,
		 *    "customers": [
		 *      "customerId": "5351090b8fe7f4e7b99d6e67",
		 *      "customerName": "Administratorzy systemu",
		 *      "roles": [{
		 *    	  "roleId": "53576b379d33da5ee72b45cf",
		 *    	  "roleName": "system-admin"
		 *      }],
		 *      "featureKeys": [
		 *        "CERT_MGMT"
		 *      ],
		 *      "constraints": [],
		 *      "status": "ACTIVE",
		 *      "hashCode": -1959223591
		 *    ]
		 *  }
		 */
		//noinspection JSUnusedGlobalSymbols
		return restmod
			.model('/users')
			.mix('UserPacker', {
				customers: {
					hasMany: 'Profile'
				},
				language: {
					hasOne: 'Language'
				},
				password: {
					volatile: true
				},

				$config: {
					urlPrefix: ' http://ntrc-delta.neoteric.eu:9000/api/v1/'
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
	}

	module.registerFactory('User', User);
});
