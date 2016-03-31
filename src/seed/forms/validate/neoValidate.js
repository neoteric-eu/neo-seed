define([
	'seed/forms/module',
	'form-validation/form-validation',
	'form-validation/framework/bootstrap',
	'form-validation/language/en_US',
	'form-validation/language/pl_PL'
], function (module) {
	'use strict';

	function neoValidate($log, activeLanguage) {

		$log = $log.getInstance('seed.forms.neoValidate');
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			priority: 400,
			scope: {
				neoValidate: '='
			},
			link: function (scope, form) {

				var defaults = {
					framework: 'bootstrap',
					locale: activeLanguage.locale,
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

				scope.$on('seed.auth.neoLanguage::setActiveLanguage', function (e, language) {

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

