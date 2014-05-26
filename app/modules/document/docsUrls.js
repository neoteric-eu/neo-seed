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
			.when('/document/document-list', {templateUrl: modulePath + 'document-list.html'})
			.when('/edit-document/:documentId', {templateUrl: modulePath + 'create-document.html'}); // /:id - tak jak w schematicu

		};

		return ['$routeProvider', docsUrls];
	});
}());