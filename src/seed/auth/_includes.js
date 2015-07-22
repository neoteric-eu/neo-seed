define([
	'./_directives/neoKeep/neoKeep',
	'./_directives/neoOmit/neoOmit',

	'./_services/neoSession',
	'./_services/neoRequestHeaders',

	'./_models/User/User',
	'./_models/User/UserAPI',
	'./_models/User/UserPacker',

	'./_models/Customer/Customer',
	'./_models/Customer/CustomerAPI',

	'./_models/Language/LanguageAPI',
	'./_models/Language/Language',

	'../helpers/restmod/models/BaseAPI',

	'./login/module',
	'./login/_includes',

	'./_locale/translation'
], function () {
	'use strict';
});
