define(['seed/forms/module', 'jquery-validation'], function (module) {
	'use strict';

	return module.directive('smartValidateForm', function () {
		return {
			restrict: 'A',
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} form
			 */
			link: function (scope, form) {

				var validateOptions = {
					rules: {},
					messages: {},
					/**
					 * Description
					 * @method highlight
					 * @param {} element
					 */
					highlight: function (element) {
						$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
					},
					/**
					 * Description
					 * @method unhighlight
					 * @param {} element
					 */
					unhighlight: function (element) {
						$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
					},
					errorElement: 'span',
					errorClass: 'help-block',
					/**
					 * Description
					 * @method errorPlacement
					 * @param {} error
					 * @param {} element
					 */
					errorPlacement: function (error, element) {
						if (element.parent('.input-group').length) {
							error.insertAfter(element.parent());
						} else {
							error.insertAfter(element);
						}
					}
				};

				form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
					var $input = $(this), fieldName = $input.attr('name');

					validateOptions.rules[fieldName] = {};

					if ($input.data('required') !== undefined) {
						validateOptions.rules[fieldName].required = true;
					}
					if ($input.data('email') !== undefined) {
						validateOptions.rules[fieldName].email = true;
					}

					if ($input.data('maxlength') !== undefined) {
						validateOptions.rules[fieldName].maxlength = $input.data('maxlength');
					}

					if ($input.data('minlength') !== undefined) {
						validateOptions.rules[fieldName].minlength = $input.data('minlength');
					}

					if ($input.data('message')) {
						validateOptions.messages[fieldName] = $input.data('message');
					} else {
						angular.forEach($input.data(), function (value, key) {
							if (key.search(/message/) === 0) {
								if (!validateOptions.messages[fieldName]) {
									validateOptions.messages[fieldName] = {};
								}

								var messageKey = key.toLowerCase().replace(/^message/, '');
								validateOptions.messages[fieldName][messageKey] = value;
							}
						});
					}
				});


				form.validate(validateOptions);

			}
		};
	});
});
