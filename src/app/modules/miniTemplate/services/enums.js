
	define(['miniTemplate/module'], function(module) {
		'use strict';

		module.registerService('enums', function() {
			return {

				features: {
					// _Custom
					ONLY_NOT_LOGGED: 'ONLY_NOT_LOGGED',

					// Application
					SM_APPLICATION_GET: 'SM_APPLICATION_GET',

					// Bundle
					SM_BUNDLE_GET: 'SM_BUNDLE_GET',
					SM_BUNDLE_BUY: 'SM_BUNDLE_BUY',

					// Custmer
					SM_CUSTOMER_GET: 'SM_CUSTOMER_GET',
					SM_CUSTOMER_CREATE: 'SM_CUSTOMER_CREATE',
					SM_CUSTOMER_UPDATE: 'SM_CUSTOMER_UPDATE',
					SM_CUSTOMER_DELETE: 'SM_CUSTOMER_DELETE',

					// Role
					SM_ROLE_GET: 'SM_ROLE_GET',
					SM_ROLE_CREATE: 'SM_ROLE_CREATE',
					SM_ROLE_UPDATE: 'SM_ROLE_UPDATE',
					SM_ROLE_DELETE: 'SM_ROLE_DELETE',

					// User
					SM_USER_GET: 'SM_USER_GET',
					SM_USER_UPDATE: 'SM_USER_UPDATE'

				}

			};

		});
	});
