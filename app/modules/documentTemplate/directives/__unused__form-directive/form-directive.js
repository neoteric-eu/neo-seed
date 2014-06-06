(function() {
	'use strict';
	define([], function() {

		var formDirective = function() {

			return {
				templateUrl: './modules/documentTemplate/directives/form-directive/views/form.html',
				restrict: 'E',
				scope: {
					form:'='
				},
				controller: function($scope){
/*
					$scope.isValidationPattern = function(validationPattern) {
						var patern;
						cl
						if (angular.isDefined(validationPattern)) {
							patern = new RegExp(validationPattern);
						} else {
							patern = new RegExp('^.*');
						}

						return patern;
					};*/

				}
			};

		};

		return [formDirective];
	});
}());
