(function() {
	'use strict';
	define([] , function() {

		/**
		 *	Urls management constructor ()
		 *	- to be used in angular.module.config()
		 *
		 *	@see invoiceModule.js
		 */

		var docsUrls = function($routeProvider) {
			var modulePath = './modules/document/views/';
			$routeProvider
			.when('/document/create', {templateUrl: modulePath + 'create-document.html'})
			.when('/document/edit/:documentId', {templateUrl: modulePath + 'create-document.html'})
			.when('/document/document-list', {templateUrl: modulePath + 'document-list.html'});

		};

		return ['$routeProvider', docsUrls];
	});
}());
