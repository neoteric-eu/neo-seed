define([], function () {
	'use strict';

	var smRegistrationResource = function ($resource, appConf) {
		return $resource(appConf.generalSettings.apiUrl + ':service/:action/:id',
			{
				service: 'registration',
				id: '@registrationId'
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
				}
			}
		);
	};
	return ['$resource', smRegistrationResource];
});
