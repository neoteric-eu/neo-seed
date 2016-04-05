define(['moment', 'moment-timezone'], function (moment) {
	'use strict';

	describe('module: seed', function () {
		describe('module: auth', function () {
			describe('service: neoSession', function () {

				var $q, $rootScope, $log, $timeout, $cookies, Permission, neoSession, UserAPI, CustomerAPI, LanguageAPI, User, scope;

				beforeEach(function () {

					inject(function ($injector) {
						neoSession = $injector.get('neoSession');
						UserAPI = $injector.get('UserAPI');
						CustomerAPI = $injector.get('CustomerAPI');
						User = $injector.get('User');
						$rootScope = $injector.get('$rootScope');
						LanguageAPI = $injector.get('LanguageAPI');
						$log = $injector.get('$log');
						$timeout = $injector.get('$timeout');
						Permission = $injector.get('Permission');
						$q = $injector.get('$q');
						$cookies = $injector.get('$cookies');
					});
				});

				beforeEach(function () {
					inject(function ($injector) {
						scope = $injector.get('$rootScope').$new();
					});
				});

				afterEach(function () {
					$cookies.remove('token');
					$cookies.remove('activeCustomer');
				});

				it('should throw error when calling setSession and user is not defined', function () {
					// GIVEN
					// WHEN
					// THEN
					expect(function () {
						neoSession.setSession();
					}).toThrowError('Parameter "user" must be defined');
				});

				it('should throw error when calling setSession and customer is not defined', function () {
					// GIVEN
					var user = UserAPI.build();

					// WHEN
					// THEN
					expect(function () {
						neoSession.setSession(user);
					}).toThrowError('Parameter "customer" must be defined');
				});

				it('should return resolved promise when customer and user provided', function () {
					// GIVEN
					var called = false;

					var user = UserAPI.build({
						customers: [{
							customerId: 'exampleCustomerId',
							featureKeys: []
						}]
					});

					user.$metadata = {
						token: 'exampleToken'
					};

					// WHEN
					neoSession
						.setSession(user, user.customers[0])
						.then(function () {
							called = true;
						});

					$rootScope.$apply();

					// THEN
					expect(called).toBeTruthy();
				});

				it('should set timezone when is defined', function () {
					// GIVEN
					spyOn(moment.tz, 'setDefault');

					var user = UserAPI.build({
						customers: [{
							customerId: 'exampleCustomerId',
							featureKeys: []
						}],
						timezone: 'exampleTimezone'
					});

					user.$metadata = {
						token: 'exampleToken'
					};

					// WHEN
					neoSession
						.setSession(user, user.customers[0]);

					$rootScope.$apply();

					// THEN
					expect(moment.tz.setDefault).toHaveBeenCalled();
				});


				it('should return rejected promise when encountered error setting up session', function () {
					// GIVEN
					var called = false;

					var user = UserAPI.build({
						customers: [{}]
					});

					// WHEN
					neoSession
						.setSession(user, user.customers[0])
						.catch(function () {
							called = true;
						});

					$rootScope.$apply();

					// THEN
					expect(called).toBeTruthy();
				});

				it('should return resolved promise when session is cleared ', function () {
					// GIVEN
					var called = true;

					var user = UserAPI.build({
						customers: [{
							customerId: undefined,
							featureKeys: []
						}]
					});

					// WHEN
					neoSession
						.clearSession(user)
						.then(function () {
							called = false;
						});

					$rootScope.$apply();

					// THEN
					expect(called).toBeFalsy();
				});

				describe('method: checkSession', function () {

					it('should return rejected promise when user does not have set token and active customer set', function () {
						// GIVEN
						var wasCalled = false;

						// WHEN
						neoSession
							.checkSession()
							.catch(function () {
								wasCalled = true;
							});

						$rootScope.$apply();

						// THEN
						expect(wasCalled).toBeTruthy();
					});

					it('should call setSession and resolve promise when global object user and customer are not set', function () {
						// GIVEN
						$cookies.putObject('token', 'exampleToken');
						$cookies.putObject('activeCustomer', 'exampleCustomer');
						spyOn(neoSession, 'setSession').and.callThrough();
						spyOn(UserAPI, 'authInfo').and.callFake(function () {
							var user = UserAPI.build({
								customers: [{
									customerId: 'exampleCustomer',
									featureKeys: []
								}]
							});
							user.$metadata = {
								token: 'exampleToken'
							};
							return $q.resolve(user);
						});

						var wasCalled = false;

						neoSession
							.checkSession()
							.then(function () {
								wasCalled = true;
							});
						// WHEN
						$rootScope.$apply();
						// THEN
						expect(wasCalled).toBeTruthy();
						expect(neoSession.setSession).toHaveBeenCalled();
					});

					it('should return resolved promise when global object user and customer are set', function () {
						// GIVEN
						$cookies.putObject('token', 'exampleToken');
						$cookies.putObject('activeCustomer', 'exampleCustomer');

						spyOn(UserAPI, 'authInfo').and.callFake(function () {
							var user = UserAPI.build({
								customers: [{
									customerId: 'exampleCustomer',
									featureKeys: []
								}]
							});
							user.$metadata = {
								token: 'exampleToken'
							};
							return $q.resolve(user);
						});

						$rootScope.user = {};
						$rootScope.customer = {};

						var wasCalled = false;

						neoSession
							.checkSession()
							.then(function () {
								wasCalled = true;
							});
						// WHEN
						$rootScope.$apply();
						// THEN
						expect(wasCalled).toBeTruthy();
					});

					it('should return rejected promise when setting up a session', function () {
						// GIVEN
						$cookies.putObject('token', 'exampleToken');
						$cookies.putObject('activeCustomer', 'exampleCustomer');

						spyOn(neoSession, 'clearSession').and.callThrough();

						spyOn(UserAPI, 'authInfo').and.callFake(function () {
							return $q.reject();
						});

						$rootScope.user = {};
						$rootScope.customer = {};

						var wasCalled = false;

						neoSession
							.checkSession()
							.catch(function () {
								wasCalled = true;
							});

						// WHEN
						$rootScope.$apply();

						// THEN
						expect(wasCalled).toBeTruthy();
						expect(neoSession.clearSession).toHaveBeenCalled();
					});
				});
			});
		});
	});
});