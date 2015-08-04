define(['apps/demo/module'], function (app) {
	"use strict";

	return app.controller("LanguagesCtrl", LanguagesCtrl);

	function LanguagesCtrl($scope, $rootScope, $log, LanguageDemo) {

		$rootScope.lang = {};

		LanguageDemo.getLanguages(function (data) {

			$rootScope.activeLanguage = data[0];

			$rootScope.languages = data;

			Language.getLang(data[0].key, function (data) {

				$rootScope.lang = data;
			});

		});

		$scope.selectLanguage = function (language) {
			$rootScope.activeLanguage = language;

			Language.getLang(language.key, function (data) {

				$rootScope.lang = data;

			});
		}


		$rootScope.getWord = function (key) {
			if (angular.isDefined($rootScope.lang[key])) {
				return $rootScope.lang[key];
			}
			else {
				return key;
			}
		}

	}

});
