(function() {
	'use strict';
	define([], function() {

		var ViewTemplateController = function($scope, $routeParams, documentTemplateService) {
			$scope.form = {};

			// read form with given id
			documentTemplateService.form($routeParams.id).then(function(form) {
				$scope.form = form;
			});
		};

		return ['$scope', '$routeParams', 'documentTemplateService', ViewTemplateController];
	});
}());

