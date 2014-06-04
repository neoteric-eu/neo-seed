(function() {
	'use strict';
	define([], function() {

		var fieldDirective = function($http, $compile) {

			var getTemplateUrl = function(field) {
				console.log(field.fieldTypeName, 'a');
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
				link: linker,
				controller: function($scope){
					$scope.isValidationPattern = function(validationPattern) {
						var patern;
						console.log('validationPattern', validationPattern);
						if (angular.isDefined(validationPattern)) {
							patern = new RegExp(validationPattern);
						} else {
							patern = new RegExp('^.*');
						}
						console.log(patern, 'patern');
						return patern;
					};
				}
			};
		};

		return ['$http', '$compile', fieldDirective];
	});
}());
