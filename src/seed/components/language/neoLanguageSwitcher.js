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
	 * @param LanguageAPI {Object} Interface for REST communication with server
	 * @return {{restrict: string, templateUrl: string, controllerAs: string, controller: Function}}
	 */
	function neoLanguageSwitcher($log, LanguageAPI) {
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
				vm.languageCollection = LanguageAPI.languageCollection;
				vm.activeLanguage = LanguageAPI.getLanguage();

				// methods
				vm.init = init;
				vm.setLanguageActive = setLanguageActive;

				init();

				/**
				 * Initializes controller on set-up
				 */
				function init() {
					LanguageAPI.init();

					$log.debug('Initiated controller');
				}

				/**
				 * Change application language
				 * @param language {seed.auth.Language} Language model
				 */
				function setLanguageActive(language) {
					LanguageAPI.setLanguage(language);
					vm.activeLanguage = language;

					$log.debug('Switched application language');
				}

			}
		};
	}

	module.directive('neoLanguageSwitcher', neoLanguageSwitcher);
});
