define(['app'],
	function (module) {
		'use strict';


		/**
		 * Data model
		 * @example
		 *  {
		 *    "data": [
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
		 * @constructor Language
		 * @param {Object} restmod CallExpression
		 * @returns {Model} Language
		 */
		function Language(restmod) {
			return restmod
				.model('/language')
				.mix({
					$extend: {
						Resource: {
							/**
							 * Description
							 * @method $setSelected
							 * @param {Object} locale
							 */
							$setSelected: function (locale) {
								this.$selected = locale;
							},

							/**
							 * Description
							 * @method $findByCode
							 * @param {String} code
							 * @return {Object} Language
							 */
							$findByCode: function (code) {
								return _.findWhere(this, {code: code.toLowerCase()});
							}
						}
					}
				});
		}

		module.registerFactory('Language', Language);
	});
