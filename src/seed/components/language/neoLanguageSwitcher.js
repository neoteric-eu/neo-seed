define(['seed/components/module'], function (module) {
	'use strict';

	/**
	 * Renders application language switcher
	 * @class neoLanguageSwitcher
	 * @memberOf seed.components
	 *
	 * @example
	 * <neo-language-switcher></neo-language-switcher>
	 *
	 * @param $log {Object} Logging service
	 * @param neoLanguage {seed.auth.neoLanguage}
	 * @param availableLanguages {seed.auth.availableLanguages}
	 * @param activeLanguage {seed.auth.activeLanguage}
	 */
	function neoLanguageSwitcher($log, neoLanguage, availableLanguages, activeLanguage) {
		$log = $log.getInstance('seed.components.neoLanguageSwitcher');

		$log.debug('Initiated directive');

		return {
			restrict: 'EA',
			templateUrl: 'seed/components/language/neoLanguageSwitcher.html',
			controllerAs: 'vm',
			scope: true,

			controller: function () {
				var vm = this;

				// variables
				vm.languageCollection = availableLanguages;
				vm.activeLanguage = activeLanguage;

				// methods
				vm.setLanguageActive = setLanguageActive;

				/**
				 * Change application language
				 * @param language {seed.auth.Language} Language model
				 */
				function setLanguageActive(language) {
					neoLanguage.setActiveLanguage(language);

					$log.debug('Switched application language');
				}

				$log.debug('Initiated controller');
			}
		};
	}

	module.directive('neoLanguageSwitcher', neoLanguageSwitcher);
});
