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

					$scope.submit = function(){
						console.log('Form submitted..');
						$scope.form.submitted = true;
					};

					$scope.cancel = function(){
						console.log('Form canceled..');
					};

					$scope.isValidationPattern = function(validationPattern) {
						var patern;
						if (angular.isDefined(validationPattern)) {
							patern = new RegExp(validationPattern);
						} else {
							patern = new RegExp('^.*');
						}

						return patern;
					};
				},
				link: function() {
					console.log('uhu!');
				}
			};

		};

		return [formDirective];
	});
}());
