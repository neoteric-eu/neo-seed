define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('seed.layout', ['seed.auth', 'app.conf']);

	module.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider.state('app', {
			abstract: true,
			data: {
				permissions: {
					only: ['user'],
					redirectTo: 'auth.login.loginForm'
				}
			},
			views: {
				root: {
					controllerAs: 'vm',
					templateUrl: 'seed/layout/views/view.html',
					controller: function (appConf) {
						var vm = this;
						vm.appConf = appConf;
					}
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('auth.login');
		});
	});

	return module;
});
