define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.layout', ['app.conf']);

	module.config(function ($stateProvider, $urlRouterProvider, appConf) {

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
			$state.go(appConf.generalSettings.defaultRedirectState);
		});
	});

	module.run(function (PermissionStore, neoSession, $rootScope, authConf) {

		$rootScope.$on('$stateChangePermissionDenied', function (event, toState, toParams) {
			$rootScope.requestedState = undefined;
			if (toState.name !== 'auth.logout') {
				$rootScope.requestedState = {
					toState: toState.name,
					toParams: toParams
				};
			}
		});

		$rootScope.$on(authConf.neoPermission.events.clear, function () {
			PermissionStore.definePermission('AUTHORIZED', function () {
				return neoSession.checkSession();
			});
		});

		PermissionStore.definePermission('AUTHORIZED', function () {
			return neoSession.checkSession();
		});
	});

	return module;
});
