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
			.when('/doc-list', {templateUrl: modulePath + 'docs-list.html'})
			.when('/edit-doc', {templateUrl: modulePath + 'edit-doc.html'});

		};

		return ['$routeProvider', docsUrls];
	});
}());