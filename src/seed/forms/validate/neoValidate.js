define([
	'seed/module',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	function neoValidate($log) {
		return {
			restrict: 'A',
			scope: {
				neoValidate: '='
			},
			link: function (scope, form) {

				var defaults = {
					framework: 'bootstrap',
					fields: {},
					err: {
						container: 'tooltip'
					},
					icon: {
						valid: 'fa fa-check',
						invalid: 'fa fa-times',
						validating: 'fa fa-refresh'
					}
				};

				var options = _.mergeDefaults(scope.settings || {}, defaults);

				form
					.on('init.form.fv', function () {
						// Remove these irritating automatically added hidden submit buttons
						form.find('.fv-hidden-submit').remove();
					})
					.formValidation(options);

				$log.debug('Initiated linking function');
			}
		};
	}

	return module.directive('neoValidate', neoValidate);
});

