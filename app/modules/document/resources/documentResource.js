(function() {
	'use strict';
	define(['globalSettings'], function(globalSettings) {
		var documentResource = function($resource) {
			return $resource(globalSettings.get('tempUrl')+'documents/:action/:documentId',
				{
					action: '@action',
					documentId: '@documentId',
				},
				{

					getDocumentById: {
						method: 'GET'
					},

					getDocuments: {
						method: 'GET'
					},

					createDocument: {
						method: 'POST'
					},

					updateDocument: {
						method: 'POST'
					},

					deleteDocument: {
						method: 'DELETE',
					}

				}
			);
		};
		return ['$resource', documentResource];
	});
}());
