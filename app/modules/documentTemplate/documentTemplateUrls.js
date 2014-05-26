(function() {
	'use strict';
	define([] , function() {

		var documentTemplateUrls = function($routeProvider) {
			var modulePath = './modules/documentTemplate/views/';

			$routeProvider
			.when('/template/create', {
				templateUrl: modulePath + 'create.html',
				controller: 'CreateFbController'
			})
			.when('/template/:id/view', {
				templateUrl: modulePath + 'view.html',
				controller: 'ViewController'
			})
			.when('/template/template-list', {
				templateUrl: modulePath + 'template-list.html'
			})
			.when('/template/edit-template/:templateId', {	//edycja szablonu
				templateUrl: modulePath + 'create.html'
			});
		};
		return ['$routeProvider', documentTemplateUrls];
	});
}());
