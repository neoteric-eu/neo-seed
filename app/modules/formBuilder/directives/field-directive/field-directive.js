(function() {
	'use strict';
	define([], function() {

		var fieldDirective = function($http, $compile) {

			var getTemplateUrl = function(field) {
				var type = field.field_type;
				var modulePath = './modules/formBuilder/directives/field-directive/';
				var templateUrl = '';

				switch(type) {
					case 'textfield':
						templateUrl = modulePath + 'views/field/textfield.html';
						break;
					case 'email':
						templateUrl = modulePath + 'views/field/email.html';
						break;
					case 'textarea':
						templateUrl = modulePath + 'views/field/textarea.html';
						break;
					case 'checkbox':
						templateUrl = modulePath + 'views/field/checkbox.html';
						break;
					case 'date':
						templateUrl = modulePath + 'views/field/date.html';
						break;
					case 'dropdown':
						templateUrl = modulePath + 'views/field/dropdown.html';
						break;
					case 'hidden':
						templateUrl = modulePath + 'views/field/hidden.html';
						break;
					case 'password':
						templateUrl = modulePath + 'views/field/password.html';
						break;
					case 'radio':
						templateUrl =modulePath +  'views/field/radio.html';
						break;
				}
				return templateUrl;
			};

			var linker = function(scope, element) {
				// GET template content from path
				var templateUrl = getTemplateUrl(scope.field);
				$http.get(templateUrl).success(function(data) {
					element.html(data);
					$compile(element.contents())(scope);
				});
			};

			return {
				template: '<div>{{field}}</div>',
				restrict: 'E',
				scope: {
					field:'='
				},
				link: linker
			};
		};

		return ['$http', '$compile', fieldDirective];
	});
}());
