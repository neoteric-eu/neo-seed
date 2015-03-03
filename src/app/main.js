// Defer AngularJS bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

requirejs(['require.conf'], function () {
	'use strict';

	requirejs([
		'require',
		'jquery',
		'angular',
		'domReady',
		'appConfig',
		'bootstrap',
		'includes',
		'app',
		'text'
	], function (require, $, ng, domReady, appConfig) {
		$.sound_path = appConfig.sound_path;
		$.sound_on = appConfig.sound_on;

		domReady(function (document) {
			ng.bootstrap(document, ['app']);
			ng.resumeBootstrap();
		});
	});
});
