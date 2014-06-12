(function() {
	'use strict';
	define([] , function() {

		var documentTemplateUrls = function($routeProvider) {
			var modulePath = './modules/documentTemplate/views/';

			$routeProvider
			// .when('/template/:id/', {templateUrl: modulePath + 'view.html', controller: 'ViewTemplateController'})
			.when('/templates/', {templateUrl: modulePath + 'template-list.html'})

			.when('/template/create', {templateUrl: modulePath + 'create-template.html'})
			.when('/template/edit/:templateId', {templateUrl: modulePath + 'create-template.html'});
		};
		return ['$routeProvider', documentTemplateUrls];
	});
}());
