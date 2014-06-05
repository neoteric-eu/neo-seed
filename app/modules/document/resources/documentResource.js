(function() {
	'use strict';
	define(['globalSettings'], function(gloabalSettings) {
		var documentResource = function($resource) {
			return $resource(gloabalSettings.get('tempUrl')+'documents/:action/:documentId',
				{
					action: '@action',
					documentId: '@documentId',
				},
				{

					createDocument: {
						method: 'POST'
					},

					getDocuments: {
						method: 'GET'
					},

					deleteDocument: {	// 19.05 - brak REST
						method: 'DELETE',
					}


				}
			);
		};
		return ['$resource', documentResource];
	});
}());
