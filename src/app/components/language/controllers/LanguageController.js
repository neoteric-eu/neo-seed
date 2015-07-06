define(['app', 'globalSettings'], function (app) {
	'use strict';

	/**
	 * Description* @method LanguagesController
	 * @param $scope
	 * @param $rootScope
	 * @param {} $state
	 * @param {} LanguageAPI
	 */
	var LanguagesController = function ($scope,
		$rootScope,
		$state,
		LanguageAPI) {

		$scope.languages = LanguageAPI.languageCollection || [];
		$scope.currentLanguage = LanguageAPI.getLanguage();

		$scope.selectLanguage = function (language) {
			LanguageAPI.setLanguage(language);
			$scope.currentLanguage = LanguageAPI.getLanguage();
		};
	};

	app.registerController('LanguagesController', LanguagesController);
});
