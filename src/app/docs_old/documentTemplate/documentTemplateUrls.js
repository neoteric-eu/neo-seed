(function () {
	'use strict';
	define([], function () {

		var documentTemplateUrls = function ($routeProvider) {
			var modulePath = './modules/documentTemplate/views/';

			$routeProvider
				.when('/templates/', {templateUrl: modulePath + 'template-list.html'})
				.when('/complex/', {templateUrl: modulePath + 'complex-list.html'})
				.when('/complex/create', {templateUrl: modulePath + 'create-complex.html'})
				.when('/complex/edit/:complexId', {templateUrl: modulePath + 'create-complex.html'})
				.when('/template/create', {templateUrl: modulePath + 'create-template.html'})
				.when('/template/edit/:templateId', {templateUrl: modulePath + 'create-template.html'});
		};
		return ['$routeProvider', documentTemplateUrls];
	});
}());
