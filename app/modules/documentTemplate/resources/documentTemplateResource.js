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

					getTemplateById: {
						method: 'GET'
					},

					createTemplate: {
						method: 'POST'
					},

					updateTemplate: {
						method: 'POST'
					},

					removeTemplate: {
						method: 'DELETE',
					}


				}
			);
		};
		return ['$resource', documentTemplateResource];
	});
}());
