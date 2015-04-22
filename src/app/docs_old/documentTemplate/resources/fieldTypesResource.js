(function () {
	'use strict';
	define(['globalSettings'], function (gloabalSettings) {
		var fieldTypesResource = function ($resource) {
			return $resource(gloabalSettings.get('baseUrl') + 'fieldTypes/:action/:complexId',
				{
					action: '@action',
					complexId: '@complexId',
				},
				{

					getFieldTypes: {
						method: 'GET'
					},

					getComplexById: {
						method: 'GET'
					},

					createFieldType: {
						method: 'POST'
					},
					removeComplexField: {
						method: 'DELETE',
					},

				}
			);
		};

		return ['$resource', fieldTypesResource];

	});
}());
