(function() {
	'use strict';
	define([], function() {

		var formDirective = function() {

			return {
				controller: function($scope){
					$scope.submit = function(){
						console.log('Form submitted..');
						$scope.form.submitted = true;
					};

					$scope.cancel = function(){
						console.log('Form canceled..');
					};
				},
				templateUrl: './modules/formBuilder/directives/form-directive/views/form.html',
				restrict: 'E',
				scope: {
					form:'='
				}
			};

		};

		return [formDirective];
	});
}());
