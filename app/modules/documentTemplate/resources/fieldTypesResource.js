(function() {
	'use strict';
	define(['globalSettings'], function(gloabalSettings) {
		var fieldTypesResource = function($resource) {
			return $resource(gloabalSettings.get('tempUrl')+'fieldTypes/:action/:templateId',
				{
					action: '@action',
					templateId: '@templateId',
				},
				{

					getFieldTypes: {
						method: 'GET'
					},
					createFieldType: {
						method: 'POST'
					}


				}
			);
		};
		return ['$resource', fieldTypesResource];
	});
}());
