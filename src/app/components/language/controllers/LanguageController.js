define(['app', 'globalSettings'], function (app) {
	'use strict';

	/**
	 * Description* @method LanguagesController
	 * @param {} $state
	 * @param {} $state
	 * @param {} $state
	 * @param {} LanguageAPI
	 */
	var LanguagesController = function ($scope,
																			$rootScope,
																			$state,
																			LanguageAPI) {

		$scope.languages = LanguageAPI.languageCollection || [];
		$scope.currentLanguage = LanguageAPI.getLanguage();

		/**
		 * Description
		 * @method selectLanguage
		 * @param {} language
		 */
		$scope.selectLanguage = function (language) {
			LanguageAPI.setLanguage(language);
			$scope.currentLanguage = LanguageAPI.getLanguage();
		};
	};

	app.registerController('LanguagesController', LanguagesController);
});
