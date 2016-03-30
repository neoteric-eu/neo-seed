define([
	'./_directives/neoPermissionOnly',
	'./_directives/neoPermissionExcept',

	'./_services/neoSession',
	'./_services/neoRequestHeaders',
	'./_services/neoLanguage',

	'./_constants/authConf',

	'./_values/availableLanguages',
	'./_values/activeLanguage',
	'./_values/defaultLanguage',

	'./_models/User/User',
	'./_models/User/UserAPI',
	'./_models/User/UserPacker',

	'./_models/Customer/Customer',
	'./_models/Customer/CustomerAPI',

	'./_models/Language/LanguageAPI',
	'./_models/Language/Language',

	'../helpers/restmod/models/BaseAPI',

	'./login/_includes',
	'./login/module',

	'./register/_includes',
	'./register/module',

	'./password/_includes',
	'./password/module',

	'./lock/_includes',
	'./lock/module'
], function () {
	'use strict';
});
