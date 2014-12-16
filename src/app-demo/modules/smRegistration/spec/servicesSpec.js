(function() {
	'use strict';
	define(['globalSettings', 'angular', 'angularMocks', 'app'], function(globalSettings) {
		describe('smRegistration services', function() {
			var $httpBackend, $http, successCb,	errorCb, smRegistrationService;

			beforeEach(module('smRegistration.services'));

			beforeEach(inject(function($injector) {
				$httpBackend = $injector.get('$httpBackend');
				$http = $injector.get('$http');
				successCb = jasmine.createSpy();
				errorCb = jasmine.createSpy();

				smRegistrationService = $injector.get('smRegistrationService');
			}));

			describe('smRegistration REST methods', function() {


				it('should register()', function() {
					var mockedData = {};

					$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'registration').respond(200, {});
					smRegistrationService.register(mockedData).then(successCb, errorCb);
					$httpBackend.flush();
					expect(successCb).toHaveBeenCalled();

					$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'registration').respond(400, {});
					smRegistrationService.register(mockedData).then(successCb, errorCb);
					$httpBackend.flush();
					expect(errorCb).toHaveBeenCalled();
				});


				it('should activate()', function() {
					var mockedData = {};

					$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'registration/activate').respond(200, {});
					smRegistrationService.activate(mockedData).then(successCb, errorCb);
					$httpBackend.flush();
					expect(successCb).toHaveBeenCalled();

					$httpBackend.expectPOST(globalSettings.get('baseUrl') + 'registration/activate').respond(400, {});
					smRegistrationService.activate(mockedData).then(successCb, errorCb);
					$httpBackend.flush();
					expect(errorCb).toHaveBeenCalled();
				});

			});

		});
	});
}());
