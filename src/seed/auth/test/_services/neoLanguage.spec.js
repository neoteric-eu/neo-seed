define([], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('service: neoLanguage', function () {

				var appConf;
				var neoLanguage;
				var LanguageAPI;
				var availableLanguages;
				var activeLanguage;
				var $cookies;
				var $window;

				var _navigator;

				beforeEach(function () {
					inject(function ($injector) {
						neoLanguage = $injector.get('neoLanguage');
						LanguageAPI = $injector.get('LanguageAPI');
						$window = $injector.get('$window');
						$cookies = $injector.get('$cookies');
						availableLanguages = $injector.get('availableLanguages');
						activeLanguage = $injector.get('activeLanguage');
						appConf = $injector.get('appConf');
					});

					// Store original window
					_navigator = $window.navigator;
				});

				afterEach(function () {
					// Revert navigator changes
					$window.navigator = _navigator;
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


					it('should throw error when can not create collection of languages', function () {
						// GIVEN
						appConf.languageSettings.languageCollection = {};

						// WHEN
						// THEN
						expect(function () {
							neoLanguage.init();
						}).toThrowError('Malformed "availableLanguages" collection');
					});

					it('should initialize activeLanguage from cookie settings when provided', function () {
						// GIVEN
						$cookies.put('lang', 'en-GB');

						// WHEN
						neoLanguage.init();

						// THEN
						expect(activeLanguage.locale).toBe('en-GB');
					});

					it('should clear "lang" cookie value if is set as object and insert string instead', function () {
						// GIVEN
						$cookies.putObject('lang', {locale: 'en-GB'});

						// WHEN
						neoLanguage.init();

						// THEN
						expect($cookies.get('lang')).toEqual(jasmine.any(String));
					});

					it('should initialize activeLanguage from browser settings when provided', function () {
						// GIVEN
						$window.navigator = {language: 'pl-PL'};

						// WHEN
						neoLanguage.init();

						// THEN
						expect(activeLanguage.locale).toEqual('pl-PL');
					});

					it('should initialize activeLanguage from default settings when cookie and browser do not match', function () {
						// GIVEN
						$window.navigator = {language: 'it-IT'};

						// WHEN
						neoLanguage.init();

						// THEN
						expect(activeLanguage.locale).toEqual('en-GB');
					});
				});

				describe('method: getLanguageByLocale', function () {
					it('should return Language object if found by locale', function () {
						// GIVEN
						neoLanguage.init();

						// WHEN
						var sut = neoLanguage.getLanguageByLocale('en-GB');

						// THEN
						expect(sut.locale).toBe('en-GB');
					});
				});

				describe('method: isLanguageAvailable', function () {
					it('should return boolean if locale of language is available', function () {
						// GIVEN
						neoLanguage.init();

						// WHEN
						var sut = neoLanguage.isLanguageAvailable('en-GB');

						// THEN
						expect(sut).toBeTruthy();
					});
				});

				describe('method: setActiveLanguage', function () {
					it('should throw error when language is not available on list of available languages', function () {
						// GIVEN
						neoLanguage.init();

						// WHEN
						// THEN
						expect(function () {
							neoLanguage.setActiveLanguage({});
						}).toThrowError('Trying to set language to not available one');
					});

					it('should update activeLanguage value if is on list of available languages', function () {
						// GIVEN
						neoLanguage.init();

						// WHEN
						neoLanguage.setActiveLanguage(availableLanguages[1]);

						// THEN
						expect(activeLanguage.locale).toBe(availableLanguages[1].locale);
					});
				});
			});
		});
	});
});

