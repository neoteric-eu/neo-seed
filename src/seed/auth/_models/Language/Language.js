define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 *
	 * @param restmod
	 * @return {*|Model}
	 * @constructor
	 */
	var Language = function (restmod) {
		return restmod
			.model('/language')
			.mix({
				$extend: {
					Resource: {
						$setSelected: function (locale) {
							this.$selected = locale;
						},

						$findByCode: function (code) {
							return _.findWhere(this, {code: code.toLowerCase()});
						}
					}
				}
			});
	};

	module.factory('Language', Language);
});
