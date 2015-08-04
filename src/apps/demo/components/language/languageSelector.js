define(['apps/demo/module'], function (module) {
	"use strict";

	module.directive('languageSelector', function (LanguageDemo) {
		return {
			restrict: "EA",
			replace: true,
			templateUrl: "apps/demo/components/language/language-selector.tpl.html",
			scope: true
		}
	})
});
