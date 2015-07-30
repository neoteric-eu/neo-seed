define([
	'./controllers/ActivationController',
	'./controllers/LoginController',
	'./controllers/RegisterController',

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

	'./_locale/translation'
], function () {
	'use strict';
});
