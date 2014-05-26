(function() {
	'use strict';
	define(['globalSettings'], function(gloabalSettings) {
		var documentTemplateResource = function($resource) {
			return $resource(gloabalSettings.get('baseUrl')+'documentTemplates/:action/:templateId',
				{
					action: '@action',
					templateId: '@templateId',
				},
				{

					getTemplates: {
						method: 'GET',
						isArray: true
					},

					getTemplateById: { 	// id w ciele
						method: 'GET'
					},

					createTemplate: {
						method: 'POST'
					},

					updateTemplate: {	// id w ciele
						method: 'POST'
					},					

					removeTemplate: {	// id w ciele
						method: 'DELETE',
					}


				}
			);
		};
		return ['$resource', documentTemplateResource];
	});
}());
