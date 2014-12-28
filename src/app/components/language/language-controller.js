define(['app', 'globalSettings'], function(app, globalSettings){
	'use strict';

	return app.controller('LanguagesCtrl', function (
		$scope,
		$state,
		session
	){

		$scope.languages = globalSettings.get('LANGUAGES');
		$scope.currentLanguage = session.getLocale();

		$scope.selectLanguage = function(language){
			session.setLocale(language);
			$scope.currentLanguage = session.getLocale();
			$state.reload();
		};
	});
});
