define(['app'], function (module) {
	'use strict';

	module.directive('languageSelector', function () {
		return {
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/language/language-selector.html',
			scope: true
		};
	});
});
