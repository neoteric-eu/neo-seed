define(['seed/module'], function (module) {
	'use strict';

	/**
	 * Renders language selector based n provided languages in app configuration
	 * @class languageSelector
	 * @memberOf app.components
	 *
	 * @param $log Browser console provider
	 * @param LanguageAPI Interface for collection management
	 * @return {{restrict: string, templateUrl: string, scope: boolean, controllerAs: string,
	 *   controller: Function}}
	 */
	function languageSelector($log, LanguageAPI) {
		return {
			restrict: 'EA',
			templateUrl: 'seed/components/language/language-selector.html',
			scope: true,
			controllerAs: 'vm',
			/**
			 * Handles directive business logic
			 */
			controller: function () {
				var vm = this;

				vm.languages = LanguageAPI.languageCollection;
				vm.currentLanguage = LanguageAPI.getLanguage();

				vm.selectLanguage = selectLanguage;

				function selectLanguage(language) {
					$log.debug(
						_.template('Switched language to <%= language %>')({
							language: language.locale
						}));

					LanguageAPI.setLanguage(language);
					vm.currentLanguage = LanguageAPI.getLanguage();
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.registerDirective('languageSelector', languageSelector);
});
