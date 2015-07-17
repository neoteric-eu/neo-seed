// jshint unused: false
requirejs.config({
	paths: {
		'appConfig': 'apps/module.conf',
		// jQuery dependencies
		'jquery': 'assets/js/vendor/jquery/jquery',
		'jquery-ui': 'assets/js/vendor/jquery-ui',
		'jquery-validation': 'assets/js/vendor/jquery-validation/jquery-validate',

		// Angular dependencies
		'angular': 'assets/js/vendor/angular/angular',
		'angular-animate': 'assets/js/vendor/angular-animate/angular-animate',
		'angular-bootstrap': 'assets/js/vendor/angular-bootstrap/ui-bootstrap',
		'angular-bootstrap-tpls': 'assets/js/vendor/angular-bootstrap/ui-bootstrap-tpls',
		'angular-cookie': 'assets/js/vendor/angular-cookie/angular-cookie',
		'angular-couch-potato': 'assets/js/vendor/angular-couch-potato/angular-couch-potato',
		'angular-gettext': 'assets/js/vendor/angular-gettext/angular-gettext',
		'angular-moment': 'assets/js/vendor/angular-moment/angular-moment',
		'angular-permission': 'assets/js/custom/angular-permission/angular-permission',
		'angular-restmod': 'assets/js/vendor/angular-restmod/angular-restmod',
		'angular-restmod-preload': 'assets/js/vendor/angular-restmod/plugins/preload.min',
		'angular-restmod-find-many': 'assets/js/vendor/angular-restmod/plugins/find-many.min',
		'angular-sanitize': 'assets/js/vendor/angular-sanitize/angular-sanitize',
		'angular-ui-date': 'assets/js/vendor/angular-ui-date/angular-ui-date',
		'angular-ui-select': 'assets/js/vendor/angular-ui-select/angular-ui-select',
		'angular-ui-router': 'assets/js/vendor/angular-ui-router/angular-ui-router',
		'angular-table': 'assets/js/vendor/angular-table/angular-table',

		// Bootstrap dependencies
		'bootstrap': 'assets/js/vendor/bootstrap/bootstrap',

		// Smart Admin plugins
		'smartwidgets': 'assets/js/smart-admin-plugins/smartwidgets/jarvis.widget',
		'notification': 'assets/js/smart-admin-plugins/notification/SmartNotification',

		// Other vendor
		'fastclick': 'assets/js/vendor/fastclick/fastclick',
		'moment': 'assets/js/vendor/moment/moment',
		'domReady': 'assets/js/vendor/requirejs-domready/requirejs-domready',
		'lodash': 'assets/js/vendor/lodash/lodash',
		'lodash-deep': 'assets/js/vendor/lodash-deep/lodash-deep',
		'lodash-extensions': 'assets/js/custom/lodash-extensions/lodash-extensions',

		'raphael': 'assets/js/vendor/raphael/raphael',
		'morris': 'assets/js/vendor/morris/morris',

		'form-validation': 'assets/js/vendor/form-validation/form-validation',
		'form-validation-bootstrap': 'assets/js/vendor/form-validation/framework/bootstrap'
	},

	shim: {
		// jQuery dependencies
		'jquery-validation': ['jquery'],

		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},

		'angular-animate': ['angular'],
		'angular-bootstrap-tpls': ['angular-bootstrap'],
		'angular-bootstrap': ['angular'],
		'angular-cookie': ['angular'],
		'angular-couch-potato': ['angular'],
		'angular-gettext': ['angular'],
		'angular-mocks': ['angular'],
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
