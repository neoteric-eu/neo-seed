define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @class authConf
	 * @memberOf seed.auth
	 */
	module.constant('authConf', {
		neoLanguage: {
			events: {
				setActiveLanguage: 'seed.auth.neoLanguage::setActiveLanguage'
			}
		}
	});
});