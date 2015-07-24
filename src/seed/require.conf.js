// jshint unused: false
requirejs.config({
	paths: {
		'appConfig': 'apps/module.conf',
		// jQuery dependencies
		'jquery': 'assets/js/vendor/libs/jquery/jquery',
		'jquery-ui': 'assets/js/vendor/libs/jquery-ui',

		// Angular dependencies
		'angular': 'assets/js/vendor/libs/angular/angular',
		'angular-animate': 'assets/js/vendor/libs/angular-animate/angular-animate',
		'angular-bootstrap': 'assets/js/vendor/libs/angular-bootstrap/ui-bootstrap',
		'angular-bootstrap-tpls': 'assets/js/vendor/libs/angular-bootstrap/ui-bootstrap-tpls',
		'angular-cookie': 'assets/js/vendor/libs/angular-cookie/angular-cookie',
		'angular-gettext': 'assets/js/vendor/libs/angular-gettext/angular-gettext',
		'angular-hotkeys': 'assets/js/vendor/libs/angular-hotkeys/angular-hotkeys',
		'angular-loading-bar': 'assets/js/vendor/libs/angular-loading-bar/angular-loading-bar',
		'angular-moment': 'assets/js/vendor/libs/angular-moment/angular-moment',
		'angular-permission': 'assets/js/vendor/libs/angular-permission/angular-permission',
		'angular-restmod': 'assets/js/vendor/libs/angular-restmod/angular-restmod',
		'angular-restmod-preload': 'assets/js/vendor/libs/angular-restmod/plugins/preload.min',
		'angular-restmod-find-many': 'assets/js/vendor/libs/angular-restmod/plugins/find-many.min',
		'angular-sanitize': 'assets/js/vendor/libs/angular-sanitize/angular-sanitize',
		'angular-ui-date': 'assets/js/vendor/libs/angular-ui-date/angular-ui-date',
		'angular-ui-select': 'assets/js/vendor/libs/angular-ui-select/angular-ui-select',
		'angular-ui-router': 'assets/js/vendor/libs/angular-ui-router/angular-ui-router',
		'angular-table': 'assets/js/vendor/libs/angular-table/angular-table',

		// Bootstrap dependencies
		'bootstrap': 'assets/js/vendor/libs/bootstrap/bootstrap',

		// Smart Admin plugins
		'smartwidgets': 'assets/js/vendor/smartadmin/smartwidgets/jarvis.widget',
		'notification': 'assets/js/vendor/smartadmin/notification/SmartNotification',

		// Other vendor
		'moment': 'assets/js/vendor/libs/moment/moment',
		'domReady': 'assets/js/vendor/libs/requirejs-domready/requirejs-domready',
		'lodash': 'assets/js/vendor/libs/lodash/lodash',
		'lodash-deep': 'assets/js/vendor/libs/lodash-deep/lodash-deep',
		'lodash-extensions': 'assets/js/custom/lodash-extensions/lodash-extensions',

		'raphael': 'assets/js/vendor/libs/raphael/raphael',
		'morris': 'assets/js/vendor/libs/morris/morris',

		'form-validation': 'assets/js/vendor/libs/form-validation/form-validation',
		'form-validation-bootstrap': 'assets/js/vendor/libs/form-validation/framework/bootstrap'
	},

	shim: {
		// jQuery dependencies

		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},

		'angular-animate': ['angular'],
		'angular-bootstrap': ['angular'],
		'angular-bootstrap-tpls': ['angular-bootstrap'],
		'angular-cookie': ['angular'],
		'angular-gettext': ['angular'],
		'angular-hotkeys': ['angular'],
		'angular-mocks': ['angular'],
		'angular-loading-bar': ['angular'],
		'angular-moment': ['angular', 'moment'],
		'angular-restmod': ['angular'],
		'angular-restmod-preload': ['angular-restmod'],
		'angular-restmod-find-many': ['angular-restmod'],
		'angular-sanitize': ['angular'],
		'angular-ui-date': ['angular'],
		'angular-ui-select': ['angular'],
		'angular-ui-router': ['angular'],
		'angular-permission': ['angular'],
		'angular-table': ['angular'],

		// Bootstrap dependencies
		'bootstrap': ['jquery'],

		// Smart Admin plugins
		'notification': ['jquery'],
		'smartwidgets': ['jquery-ui/sortable'],

		// Other vendor
		'moment': {exports: 'moment'},

		'morris': ['raphael', 'jquery'],

		'lodash-deep': ['lodash'],
		'lodash-extensions': ['lodash'],

		'form-validation': ['jquery'],
		'form-validation-bootstrap': ['bootstrap', 'form-validation']
	},

	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
});
