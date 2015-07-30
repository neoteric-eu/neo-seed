define(['apps/demo/modules/forms/module', 'bootstrap-validator'], function (module) {

	"use strict";


	module.registerDirective('bootstrapProfileForm', function () {

		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'apps/demo/modules/forms/directives/bootstrap-validation/bootstrap-profile-form.tpl.html',
			link: function (scope, form) {
				form.bootstrapValidator({
					feedbackIcons: {
						valid: 'glyphicon glyphicon-ok',
						invalid: 'glyphicon glyphicon-remove',
						validating: 'glyphicon glyphicon-refresh'
					},
					fields: {
						email: {
							validators: {
								notEmpty: {
									message: 'The email address is required'
								},
								emailAddress: {
									message: 'The email address is not valid'
								}
							}
						},
						password: {
							validators: {
								notEmpty: {
									message: 'The password is required'
								}
							}
						}
					}
				});

				;

			}

		}


	})


});
