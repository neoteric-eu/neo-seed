/**
 *	@module smRegistraion
 *	@version 1.0.0
 *	@date 27.08.2014r
 */

(function() {
	'use strict';

	define([
		'angular',
		'./controllers/ActivationController',
		'./controllers/RegisterController',
		'./services/smRegistrationService',
		'./resources/smRegistrationResource',
		'./smRegistrationUrls'

	], function(angular, ActivationController, RegisterController,
		smRegistrationService, smRegistrationResource, smRegistrationUrls ) {

		var moduleName = 'smRegistration';
		var controllers = moduleName + '.controllers';
		var services = moduleName + '.services';

		angular.module( moduleName, [] )
			.config(smRegistrationUrls)
			.constant('SM_REGISTRATION_PATH', './modules/smRegistration');

		angular.module( controllers, [] )
			.controller('ActivationController', ActivationController)
			.controller('RegisterController', RegisterController);


		angular.module( services, ['ngResource'] )
			.service('smRegistrationService', smRegistrationService)
			.service('smRegistrationResource', smRegistrationResource);

	});
}());
