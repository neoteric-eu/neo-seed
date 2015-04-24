define(['docs/templates/fields'], function (module) {
	'use strict';

	function docsFieldPreview($http, $compile) {
		var getTemplateUrl = function (field) {
			var type = field.fieldTypeName;
			var modulePath = './modules/document/directives/field-preview-directive/';
			var templateUrl;

			switch (type) {
				case 'ATTACHMENT':
					templateUrl = modulePath + 'views/field/preview-attachment.html';
					break;
				case 'TEXTFIELD':
					templateUrl = modulePath + 'views/field/preview-textfield.html';
					break;
				case 'EMAIL':
					templateUrl = modulePath + 'views/field/preview-email.html';
					break;
				case 'TEXTAREA':
					templateUrl = modulePath + 'views/field/preview-textarea.html';
					break;
				case 'CHECKBOX':
					templateUrl = modulePath + 'views/field/preview-checkbox.html';
					break;
				case 'DATE':
					templateUrl = modulePath + 'views/field/preview-date.html';
					break;
				case 'DROPDOWN':
					templateUrl = modulePath + 'views/field/preview-dropdown.html';
					break;
				case 'RADIO':
					templateUrl = modulePath + 'views/field/preview-radio.html';
					break;
			}
			return templateUrl;
		};


		return {
			restrict: 'E',
			link: function (scope, element) {
				// GET template content from path
				var templateUrl = getTemplateUrl(scope.field);
				$http.get(templateUrl).success(function (data) {
					element.html(data);
					$compile(element.contents())(scope);
				});
			}
		};
	}

	module.registerDirective('docsFieldPreview', docsFieldPreview);
});
