define(['auth/module'], function (module) {
	'use strict';

	module.registerFactory('Profile', function (restmod) {

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
	});
});
