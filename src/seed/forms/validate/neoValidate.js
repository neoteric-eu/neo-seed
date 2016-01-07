define([
	'seed/forms/module',
	'form-validation/form-validation',
	'form-validation/framework/bootstrap',
	'form-validation/language/en_US',
	'form-validation/language/pl_PL'
], function (module) {
	'use strict';

	function neoValidate($log, LanguageAPI) {

		$log = $log.getInstance('seed.forms.neoValidate');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			priority: 400,
			scope: {
				neoValidate: '='
			},
			link: function (scope, form) {

				var currentLanguage = LanguageAPI.getLanguage();

				var defaults = {
					framework: 'bootstrap',
					locale: currentLanguage.locale,
					addOns: {
						i18n: {}
					},
					err: {
						container: 'tooltip'
					},
					icon: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					}
				};

				var options = {};

				scope.$on('seed.languageAPI.setLanguage', function (e, language) {

					if (currentLanguage.locale === language.locale) {
						return;
					}

					options.locale = language.locale;

					scope.$applyAsync(function () {
						options = _.merge(defaults, scope.neoValidate);
						form
							.formValidation('destroy')
							.on('init.form.fv', function () {
								// Remove these irritating automatically added hidden submit buttons
								form.find('.fv-hidden-submit').remove();
							})
							.formValidation(options)
							.formValidation('validateContainer', form);
					});

				});

				scope.$applyAsync(function () {

					options = _.merge(defaults, scope.neoValidate);
					form
						.on('init.form.fv', function () {
							// Remove these irritating automatically added hidden submit buttons
							form.find('.fv-hidden-submit').remove();
						})
						.formValidation(options);

				});

				$log.debug('Called linking function');
			}
		};
	}

	return module.directive('neoValidate', neoValidate);
});
