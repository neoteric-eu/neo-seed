// Defer AngularJS bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

define([
	'require',
	'jquery',
	'angular',
	'domReady',

	//'pace',
	'appConfig',
	'bootstrap',
	'app',
	'includes'
], function (require, $, ng, domReady, appConfig) {
	'use strict';

	$.sound_path = appConfig.sound_path;
	$.sound_on = appConfig.sound_on;


	domReady(function (document) {
		ng.bootstrap(document, ['app']);
		ng.resumeBootstrap();
	});
});
