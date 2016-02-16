define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @constructor
	 * @implements {seed.BaseModel}
	 * @memberOf seed.auth
	 *
	 * @param restmod {Object} Data model layer interface
	 * @return {*|Model} Model instance
	 */
	var Customer = function (restmod) {
		return restmod
			.model()
			.mix({
				$extend: {
					Record: {
						$setSelected: function (customer) {
							this.$selected = customer;
						},
						$hasPermission: function (permission) {
							return _.includes(this.featureKeys, permission);
						}
					}
				}
			});
	};

	module.factory('Customer', Customer);
});
