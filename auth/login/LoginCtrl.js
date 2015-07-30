define(['apps/demo/auth/module'], function (module) {

	"use strict";

	module.registerController('LoginCtrl', function ($scope, $state, GooglePlus, UserDemo, ezfb) {

		$scope.$on('event:google-plus-signin-success', function (event, authResult) {
			if (authResult.status.method == 'PROMPT') {
				GooglePlus.getUser().then(function (user) {
					UserDemo.username = user.name;
					UserDemo.picture = user.picture;
					$state.go('app.demo.dashboard');
				});
			}
		});

		$scope.$on('event:facebook-signin-success', function (event, authResult) {
			ezfb.api('/me', function (res) {
				UserDemo.username = res.name;
				UserDemo.picture = 'https://graph.facebook.com/' + res.id + '/picture';
				$state.go('app.demo.dashboard');
			});
		});
	})
});
