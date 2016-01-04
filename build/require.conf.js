// jshint unused: false
requirejs.config({
	baseUrl: '/',
	paths: {
		// jQuery dependencies
		'jquery': 'assets/vendor/js/jquery/jquery',

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
		'angular-restmod/debounced': 'assets/vendor/js/angular-restmod/plugins/debounced.min',
		'angular-restmod/dirty': 'assets/vendor/js/angular-restmod/plugins/dirty.min',
		'angular-restmod/find-many': 'assets/vendor/js/angular-restmod/plugins/find-many.min',
		'angular-restmod/nested-dirty': 'assets/vendor/js/angular-restmod/plugins/nested-dirty.min',
		'angular-restmod/paged': 'assets/vendor/js/angular-restmod/plugins/paged.min',
		'angular-restmod/preload': 'assets/vendor/js/angular-restmod/plugins/preload.min',
		'angular-sanitize': 'assets/vendor/js/angular-sanitize/angular-sanitize',
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
		'lodash': 'assets/vendor/js/lodash/lodash',
		'lodash-deep': 'assets/vendor/js/lodash-deep/lodash-deep',

		'raphael': 'assets/vendor/js/raphael/raphael',
		'morris': 'assets/vendor/js/morris/morris',

		'form-validation': 'assets/vendor/js/form-validation',
		'form-validation-bootstrap': 'assets/vendor/js/form-validation/framework/bootstrap',
		'daterangepicker': 'assets/vendor/js/bootstrap-daterangepicker/daterangepicker'
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
		'angular-restmod/debounced': ['angular-restmod'],
		'angular-restmod/dirty': ['angular-restmod'],
		'angular-restmod/find-many': ['angular-restmod'],
		'angular-restmod/nested-dirty': ['angular-restmod'],
		'angular-restmod/paged': ['angular-restmod'],
		'angular-restmod/preload': ['angular-restmod'],
		'angular-sanitize': ['angular'],
		'angular-ui-select': ['angular'],
		'angular-ui-router': ['angular'],
		'angular-permission': ['angular'],
		'angular-table': ['angular'],

		// Bootstrap dependencies
		'bootstrap': ['jquery'],

		// Smart Admin plugins
		'notification': ['jquery'],
		'smartwidgets': ['jquery'],

		// Other vendor
		'moment': {exports: 'moment'},

		'morris': ['raphael', 'jquery'],

		'lodash-deep': ['lodash'],
		'lodash-extensions': ['lodash'],

		'form-validation': ['jquery'],
		'form-validation/language/pl_PL': ['form-validation/form-validation'],
		'form-validation/language/en_US': ['form-validation/form-validation'],
		'form-validation/framework/bootstrap': [
			'bootstrap',
			'form-validation/form-validation'
		],

		'daterangepicker': ['jquery', 'bootstrap', 'moment']

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
