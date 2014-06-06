(function() {
	'use strict';
	define([], function() {

		var fieldDirective = function($http, $compile) {

			var getTemplateUrl = function(field) {
				var type = field.fieldTypeName;
				var modulePath = './modules/documentTemplate/directives/field-directive/';
				var templateUrl = '';

				switch(type) {
					case 'TEXTFIELD':
						templateUrl = modulePath + 'views/field/textfield.html';
						break;
					case 'EMAIL':
						templateUrl = modulePath + 'views/field/email.html';
						break;
					case 'TEXTAREA':
						templateUrl = modulePath + 'views/field/textarea.html';
						break;
					case 'CHECKBOX':
						templateUrl = modulePath + 'views/field/checkbox.html';
						break;
					case 'DATE':
						templateUrl = modulePath + 'views/field/date.html';
						break;
					case 'DROPDOWN':
						templateUrl = modulePath + 'views/field/dropdown.html';
						break;
					case 'RADIO':
						templateUrl =modulePath +  'views/field/radio.html';
						break;
				}
				return templateUrl;
			};


			return {
				template: '<div ng-show="ready">{{field}}</div>',
				restrict: 'E',
				link: function(scope, element) {
					// GET template content from path
					var templateUrl = getTemplateUrl(scope.field);
					scope.ready = false;

					$http.get(templateUrl).success(function(data) {
						element.html(data);
						$compile(element.contents())(scope);
						scope.ready = true;
					});
				}
			};
		};

		return ['$http', '$compile', fieldDirective];
	});
}());
