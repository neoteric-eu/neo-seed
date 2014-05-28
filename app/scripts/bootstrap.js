define([
	'require',
	'angular',
	'jQuery',
	'underscore',
	'theme.smartwidgets',
	'theme.app',
	'gritter',
	// 'sentryClient',
	'angular-file-upload',
	'angularRoute',
	'angularCookies',
	'angularSanitize',
	'angularResource',
	'ui.bootstrap',
	'xeditable',
	'ngTable',

	'../scripts/app'

	], function(require, angular) {
		'use strict';
		require(['domReady!'], function(document) {
			angular.bootstrap(document, ['app']);
		});
	}
);
