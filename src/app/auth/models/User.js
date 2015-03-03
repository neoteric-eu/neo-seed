define(['auth/module'], function (module) {
	'use strict';

	module.registerFactory('User', function (restmod) {

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
		return restmod
			.model('/users')
			.mix('BaseModel', 'UserPacker', {
				customers: {
					hasMany: 'Profile'
				},
				language: {
					hasOne: 'Language'
				},

				volatile: 'password',

				$extend: {
					Resource: {
						/**
						 * Description
						 * @method $login
						 * @return CallExpression
						 */
						$login: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/login',
								data: this
							}, function (_data) {
								this.$unwrap(_data.data);
							});
						},

						/**
						 * Description
						 * @method $logout
						 * @return CallExpression
						 */
						$logout: function () {
							return this.$send({
								method: 'POST',
								url: this.$scope.$url() + '/logout',
								data: {
									token: localStorage.getItem('token')
								}
							}, function (_data) {
								this.$unwrap(_data.data);
							});
						},

						/**
						 * Description
						 * @method $authInfo
						 * @return CallExpression
						 */
						$authInfo: function () {
							return this.$send({
								method: 'GET',
								url: this.$scope.$url() + '/authInfo',
								data: {
									token: localStorage.getItem('token')
								}
							}, function (_data) {
								this.$unwrap(_data.data);
							});
						}
					},

					Record: {
						/**
						 * Description
						 * @method getFullName
						 */
						getFullName: function () {
							if (this.firstName && this.lastName) {
								return this.firstName + ' ' + this.lastName;
							}
						}
					}
				}
			});
	});
});
