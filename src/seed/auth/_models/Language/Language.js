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
