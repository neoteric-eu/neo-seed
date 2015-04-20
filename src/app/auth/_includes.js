define([
	'auth/controllers/ActivationController',
	'auth/controllers/LoginController',
	'auth/controllers/RegisterController',

	'auth/services/appMessages',
	'auth/services/session',
	'auth/services/setDefaultsHeaders',

	'./_models/User/User',
	'./_models/User/UserAPI',
	'./_models/Profile/Profile',
	'./_models/Profile/ProfileAPI',

	'helpers/restmod/models/BaseAPI',

	'auth/packers/UserPacker',

	'auth/resources/smRegistrationResource',

	'auth/directives/neoKeep/neoKeep',
	'auth/directives/neoOmit/neoOmit',
	'modules/forms/directives/validate/smartValidateForm',

	'auth/_locale/translation'
], function () {
	'use strict';
});
