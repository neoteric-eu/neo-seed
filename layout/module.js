define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.layout', ['app.conf']);

	module.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('app', {
			abstract: true,
			views: {
				root: {
					controllerAs: 'vm',
					templateUrl: 'seed/layout/views/view.html',
					controller: function (appConf) {
						var vm = this;
						vm.appConf = appConf;
					}
				}
			},
			data: {
				permissions: {
					only: ['AUTHORIZED'],
					redirectTo: 'auth.login'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	module.run(function (Permission, neoSession, $rootScope) {

		$rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
			$rootScope.requestedState = {
				toState: toState.name,
				toParams: toParams
			};
		});

		Permission.defineRole('AUTHORIZED', function () {
			return neoSession.checkSession();
		});
	});

	return module;
});
