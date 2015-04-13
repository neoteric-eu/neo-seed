define(['auth/module'], function (module) {
	'use strict';

	module.registerFactory('Profile', function (restmod) {

		return restmod
			.model()
			.mix({
				$extend: {
					Record: {
						/**
						 * Description
						 * @method $setSelected
						 * @param {Object} customer
						 */
						$setSelected: function (customer) {
							this.$selected = customer;
						},

						/**
						 * Description
						 * @method $findById
						 * @param {} id
						 * @return CallExpression
						 */
						$findById: function (id) {
							if (!_.isString(id)) {
								throw 'argument "id" must be String';
							}
							return _.findWhere(this, {id: id});
						}
					}
				}
			});
	});
});
