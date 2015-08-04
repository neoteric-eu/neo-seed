// jshint unused: false
requirejs.config({
	paths: {
		'appConfig': 'apps/module.conf',
		// jQuery dependencies
		'jquery': 'assets/vendor/js/jquery/jquery',
		'jquery-ui': 'assets/vendor/js/jquery-ui',

		// Angular dependencies
		'angular': 'assets/vendor/js/angular/angular',
		'angular-animate': 'assets/vendor/js/angular-animate/angular-animate',
		'angular-ui-bootstrap': 'assets/vendor/js/angular-ui-bootstrap/angular-ui-bootstrap',
		'angular-ui-bootstrap-tpls': 'assets/vendor/js/angular-ui-bootstrap/angular-ui-bootstrap-tpls',
		'angular-cookies': 'assets/vendor/js/angular-cookies/angular-cookies',
		'angular-gettext': 'assets/vendor/js/angular-gettext/angular-gettext',
		'angular-hotkeys': 'assets/vendor/js/angular-hotkeys/angular-hotkeys',
		'angular-loading-bar': 'assets/vendor/js/angular-loading-bar/angular-loading-bar',
		'angular-moment': 'assets/vendor/js/angular-moment/angular-moment',
		'angular-permission': 'assets/vendor/js/angular-permission/angular-permission',
		'angular-restmod': 'assets/vendor/js/angular-restmod/angular-restmod',
		'angular-restmod-preload': 'assets/vendor/js/angular-restmod/plugins/preload.min',
		'angular-restmod-find-many': 'assets/vendor/js/angular-restmod/plugins/find-many.min',
		'angular-sanitize': 'assets/vendor/js/angular-sanitize/angular-sanitize',
		'angular-ui-date': 'assets/vendor/js/angular-ui-date/angular-ui-date',
		'angular-ui-select': 'assets/vendor/js/angular-ui-select/angular-ui-select',
		'angular-ui-router': 'assets/vendor/js/angular-ui-router/angular-ui-router',
		'angular-table': 'assets/vendor/js/angular-table/angular-table',

		// Bootstrap dependencies
		'bootstrap': 'assets/vendor/js/bootstrap/bootstrap',

		// Smart Admin plugins
		'smartwidgets': 'assets/seed/js/smartadmin/smartwidgets/jarvis.widget',
		'notification': 'assets/seed/js/smartadmin/notification/SmartNotification',

		// Other vendor
		'moment': 'assets/vendor/js/moment/moment',
		'domReady': 'assets/vendor/js/requirejs-domready/requirejs-domready',
		'lodash': 'assets/vendor/js/lodash/lodash',
		'lodash-deep': 'assets/vendor/js/lodash-deep/lodash-deep',
		'lodash-extensions': 'assets/seed/js/custom/lodash-extensions/lodash-extensions',

		'raphael': 'assets/vendor/js/raphael/raphael',
		'morris': 'assets/vendor/js/morris/morris',

		'form-validation': 'assets/vendor/js/form-validation/form-validation',
		'form-validation-bootstrap': 'assets/vendor/js/form-validation/framework/bootstrap'
	},

	shim: {
		// jQuery dependencies

		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},

		'angular-animate': ['angular'],
		'angular-ui-bootstrap': ['angular'],
		'angular-ui-bootstrap-tpls': ['angular-ui-bootstrap'],
		'angular-cookies': ['angular'],
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
	],

	config: {
		moment: {
			noGlobal: true
		}
	}
});
