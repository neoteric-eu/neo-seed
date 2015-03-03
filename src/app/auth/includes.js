define([
	'auth/controllers/ActivationController',
	'auth/controllers/LoginController',
	'auth/controllers/RegisterController',

	'auth/services/appMessages',
	'auth/services/session',
	'auth/services/setDefaultsHeaders',

	'auth/models/User',
	'auth/models/Profile',

	'core/services/BaseAPI',
	'auth/services/UserAPI',
	'auth/services/ProfileAPI',

	'auth/packers/UserPacker',

	'auth/resources/smRegistrationResource',

	'auth/directives/neoKeep/neoKeep',
	'auth/directives/neoOmit/neoOmit'
], function () {
	'use strict';
});
