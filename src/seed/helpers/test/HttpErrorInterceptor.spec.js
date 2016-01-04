define([
	'angular',
	'angular-table',
	'angular-mocks',
	'seed/helpers/module',
	'seed/helpers/_includes'
], function () {
	'use strict';

	describe('module: seed', function () {
		describe('module: helpers', function () {
			describe('interceptor: HttpErrorInterceptor', function () {

				var $q, $state, HttpErrorInterceptor;

				beforeEach(function () {
					module('seed.helpers', 'ui.router');

					inject(function ($injector) {
						$q = $injector.get('$q');
						$state = $injector.get('$state');
						HttpErrorInterceptor = $injector.get('HttpErrorInterceptor');
					});
				});

				it('should intercept response error when server returns error', function () {
					// GIVEN
					var response = {status: 400};
					spyOn($q, 'reject');

					// WHEN
					HttpErrorInterceptor.responseError(response);

					// THEN
					expect($q.reject).toHaveBeenCalled();
				});

				it('should logout user when server returns 401 error', function () {
					// GIVEN
					var response = {status: 401};
					spyOn($state, 'transitionTo');
					spyOn($q, 'reject');

					// WHEN
					HttpErrorInterceptor.responseError(response);

					// THEN
					expect($q.reject).toHaveBeenCalled();
					expect($state.transitionTo).toHaveBeenCalled();
				});
			});
		});
	});
});
