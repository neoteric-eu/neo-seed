define([], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('service: neoLanguage', function () {

				/**
				 * @type {seed.auth.neoLanguage}
				 */
				var neoLanguage;
				var availableLanguages;
				var activeLanguage;
				var $cookies;
				var $window;

				beforeEach(function () {
					inject(function ($injector) {
						neoLanguage = $injector.get('neoLanguage');
						$window = $injector.get('$window');
						$cookies = $injector.get('$cookies');
						availableLanguages = $injector.get('availableLanguages');
						activeLanguage = $injector.get('activeLanguage');
					});
				});

				beforeEach(function () {
					$cookies.remove('lang');
				});

				describe('method: init', function () {
					it('should populate "availableLanguages" collection', function () {
						// GIVEN
						// WHEN
						neoLanguage.init();

						// THEN
						expect(availableLanguages.length).toBeGreaterThan(0);
					});

					it('should initialize activeLanguage from cookie settings when provided', function () {
						// GIVEN
						$cookies.put('lang', 'en_GB');

						// WHEN
						neoLanguage.init();

						// THEN
						expect(activeLanguage.localePOSIX).toBe('en_GB');
					});

					fit('should initialize activeLanguage from browser settings when provided', function () {
						// GIVEN
						var browserLocale;

						if (neoLanguage.isLanguageAvailable($window.navigator.language)) {
							browserLocale = neoLanguage.getLanguageByLocale($window.navigator.language).locale;
						} else {
							browserLocale = 'en-GB';
						}

						// WHEN
						neoLanguage.init();

						// THEN
						expect(activeLanguage.locale).toEqual(browserLocale);
					});
				});
			});
		});
	});
});

