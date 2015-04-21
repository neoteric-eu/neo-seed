define(['modules/forms/module', 'fuelux-wizard'], function (module) {
	'use strict';

	return module.registerDirective('smartFueluxWizard', function () {
		return {
			restrict: 'A',
			scope: {
				smartWizardCallback: '&'
			},
			/**
			 * Description
			 * @method link
			 * @param {} scope
			 * @param {} element
			 */
			link: function (scope, element) {

				var wizard = element.wizard();

				var $form = element.find('form');

				wizard.on('actionclicked.fu.wizard', function (e) {
					if ($form.data('validator')) {
						if (!$form.valid()) {
							$form.data('validator').focusInvalid();
							e.preventDefault();
						}
					}
				});

				wizard.on('finished.fu.wizard', function () {
					var formData = {};
					_.each($form.serializeArray(), function (field) {
						formData[field.name] = field.value;
					});
					if (typeof scope.smartWizardCallback() === 'function') {
						scope.smartWizardCallback()(formData);
					}
				});
			}
		};
	});
});
