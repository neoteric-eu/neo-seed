define(['seed/auth/module'], function (module) {
	'use strict';

	/**
	 * @const authConf
	 * @memberOf seed.auth
	 */
	var authConf = {
		neoLanguage: {
			events: {
				setActiveLanguage: 'seed.auth.neoLanguage::setActiveLanguage'
			}
		},
		neoSession: {
			events: {
				setSession: 'seed.auth.neoSession::setSession',
				clearSession: 'seed.auth.neoSession::clearSession'
			}
		},
		neoPermission: {
			events: {
				setPermissions: 'seed.auth.neoPermission::setPermissions',
				setRoles: 'seed.auth.neoPermission::setRoles',
				clear: 'seed.auth.neoPermission::clear'
			}
		}
	};

	module.constant('authConf', authConf);
});