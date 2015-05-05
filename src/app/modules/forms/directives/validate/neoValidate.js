define([
	'app',
	'form-validation',
	'form-validation-bootstrap'
], function (module) {
	'use strict';

	function neoValidate() {
		return {
			restrict: 'A',
			scope: {
				validateOptions: '='
			},
			link: function (scope, form) {
				$(form)
					.formValidation({
						framework: 'bootstrap',
						icon: {
							valid: 'fa fa-check',
							invalid: 'fa fa-times',
							validating: 'fa fa-refresh'
						},
						validators: scope.validateOptions
					});
			}
		};
	}

	return module.directive('neoValidate', neoValidate);
});

