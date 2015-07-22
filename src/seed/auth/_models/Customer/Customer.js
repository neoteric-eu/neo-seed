define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param restmod
	 * @return {*|Model}
	 * @constructor
	 */
	var Customer = function (restmod) {
		return restmod
			.model()
			.mix({
				$extend: {
					Record: {
						$setSelected: function (customer) {
							this.$selected = customer;
						}
					}
				}
			});
	};

	module.factory('Customer', Customer);
});
