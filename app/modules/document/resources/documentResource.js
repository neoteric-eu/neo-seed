(function() {
	'use strict';
	define(['globalSettings'], function(gloabalSettings) {
		var documentResource = function($resource) {
			return $resource(gloabalSettings.get('baseUrl')+'document/:action/:documentId',
				{
					action: '@action',
					documentId: '@documentId',
				},
				{

					createDocument: {
						method: 'POST'
					},

					getDocuments: {
						method: 'GET',
						isArray: true

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
