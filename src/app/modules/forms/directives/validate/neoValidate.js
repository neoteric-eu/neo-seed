define([
	'app',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	function neoValidate($log) {
		return {
			restrict: 'A',
			link: function (scope, form) {
				$(form)
					.formValidation({
						framework: 'bootstrap',
						err: {
							container: 'tooltip'
						},
						icon: {
							valid: 'fa fa-check',
							invalid: 'fa fa-times',
							validating: 'fa fa-refresh'
						}
					});

				$log.debug('Initiated linking function');
			}
		};
	}

	return module.directive('neoValidate', neoValidate);
});

