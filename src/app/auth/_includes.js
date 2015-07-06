define([
	'./controllers/ActivationController',
	'./controllers/LoginController',
	'./controllers/RegisterController',

	'./services/appMessages',
	'./services/neoSession',
	'./services/neoRequestHeaders',

	'./_models/User/User',
	'./_models/User/UserAPI',
	'./_models/Profile/Profile',
	'./_models/Profile/ProfileAPI',
	'./_models/Language/LanguageAPI',
	'./_models/Language/Language',

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
