(function () {
	'use strict';
	define(['globalSettings'], function (globalSettings) {
		/**
		 * Description
		 * @method smRegistrationResource
		 * @param {} $resource CallExpression
		 */
		var smRegistrationResource = function ($resource) {
			return $resource(globalSettings.get('baseUrl') + ':service/:action/:id',
				{
					service: 'registration',
					id: '@registrationId',
				},
				{
					register: {
						method: 'POST'
					},

					activate: {
						method: 'POST',
						params: {
							action: 'activate'
						}
					},

				}
			);
		};
		return ['$resource', smRegistrationResource];
	});
}());
