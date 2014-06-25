(function() {
	'use strict';
	define([], function() {

		var fieldComplexDirective = function($http, $compile) {
			return {
				restrict: 'E',
				link: function(scope, element) {
					var modulePath = './modules/documentTemplate/directives/field-complex-directive/';
					var templateUrl = modulePath + 'views/complex.html';

					$http.get(templateUrl).success(function(data) {
						element.html(data);
						$compile(element.contents())(scope);
					});
				}
			};
		};

		return ['$http', '$compile', fieldComplexDirective];
	});
}());
