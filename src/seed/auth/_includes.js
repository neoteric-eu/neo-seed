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

	'../helpers/restmod/models/BaseAPI',

	'./packers/UserPacker',

	'./resources/smRegistrationResource',

	'./directives/neoKeep/neoKeep',
	'./directives/neoOmit/neoOmit',
	'../forms/directives/validate/smartValidateForm',

	'./_locale/translation'
], function () {
	'use strict';
});
