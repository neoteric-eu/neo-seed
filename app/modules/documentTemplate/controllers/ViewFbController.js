(function() {
	'use strict';
	define([], function() {

		var ViewFbController = function($scope, $routeParams, formService) {
			$scope.form = {};

			// read form with given id
			formService.form($routeParams.id).then(function(form) {
				$scope.form = form;
			});
		};

		return ['$scope', '$routeParams', 'formService', ViewFbController];
	});
}());

