define([
	'require',
	'angular',
	'jQuery',
	'underscore',
	'theme.smartwidgets',
	'theme.app',
	'gritter',
	// 'sentryClient',
	'../modules/miniCore/miniCoreModule',
	'../modules/templateCore/templateCoreModule',
	'angularRoute',
	'angularCookies',
	'angularSanitize',
	'angularResource',
	'ui.bootstrap',
	'xeditable',
	'ngTable',
	'app'
	], function(require, angular) {
		'use strict';
		require(['domReady!'], function(document) {
			angular.bootstrap(document, ['app']);
		});
	}
);
