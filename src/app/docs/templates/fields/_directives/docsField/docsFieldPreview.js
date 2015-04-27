define(['docs/templates/fields'], function (module) {
	'use strict';

	function docsField($http, $compile, cfg) {

		return {
			restrict: 'EA',
			scope: true,
			link: function (scope, element) {
				// GET template content from path
				var templateUrl = getTemplateUrl(scope.field);
				$http.get(templateUrl).success(function (data) {
					element.html(data);
					$compile(element.contents())(scope);
				});
			}
		};

		function getTemplateUrl(field) {
			var templateUrl;

			switch (field) {
				case 'TEXTFIELD':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-textfield.html';
					break;
				case 'EMAIL':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-email.html';
					break;
				case 'TEXTAREA':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-textarea.html';
					break;
				case 'CHECKBOX':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-checkbox.html';
					break;
				case 'DATE':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-date.html';
					break;
				case 'DROPDOWN':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-dropdown.html';
					break;
				case 'RADIO':
					templateUrl = cfg.MODULE_PATH + '/_directives/field/preview-radio.html';
					break;
			}
			return templateUrl;
		}
	}

	module.registerDirective('docsField', docsField);
});
