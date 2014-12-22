var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		// Grab all files path with "Spec" end naming
		if (/\.spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

require.config({
	// Karma serves files from '/base'
	baseUrl: '/base/src/app',

	paths: {
		// jQuery dependencies
		'jquery': '../../src/vendor/libs/jquery/jquery',
		'jquery-ui': '../../src/vendor/libs/jquery-ui/jquery-ui',
		'jquery-color': '../../src/vendor/libs/jquery-color/jquery-color',
		'jqgrid': '../../src/vendor/libs/jquery-jqgrid/jquery-jqgrid',
		'jqgrid-locale-en': '../../src/vendor/libs/jquery-jqgrid/i18n/grid.locale-en.js',
		'jquery-maskedinput': '../../src/vendor/libs/jquery-maskedinput/jquery-maskedinput',
		'jquery-validation': '../../src/vendor/libs/jquery-validation/jquery-validate',
		'jquery-form': '../../src/vendor/libs/jquery-form/jquery-form',
		'sparkline': '../../src/vendor/libs/jquery-sparkline/jquery-sparkline',
		'easy-pie': '../../src/vendor/libs/jquery-easypiechart/jquery-easypiechart',
		'nouislider': '../../src/vendor/libs/jquery-nouislider/jquery-nouislider',
		'ionslider': '../../src/vendor/libs/ionslider/ionslider',
		'jquery-knob': '../../src/vendor/libs/jquery-knob/jquery-knob',
		'jquery-nestable': '../../src/vendor/libs/jquery-nestable/jquery-nestable',
		'jcrop': '../../src/vendor/libs/jquery-jcrop/jquery-jcrop',
		'magnific-popup': '../../src/vendor/libs/jquery-magnificpopup/jquery-magnificpopup',

		// Angular dependencies
		'angular': '../../src/vendor/libs/angular/angular',
		'angular-cookies': '../../src/vendor/libs/angular-cookies/angular-cookies',
		'angular-resource': '../../src/vendor/libs/angular-resource/angular-resource',
		'angular-mocks': '../../src/vendor/libs/angular-mocks/angular-mocks',
		'angular-sanitize': '../../src/vendor/libs/angular-sanitize/angular-sanitize',
		'angular-animate': '../../src/vendor/libs/angular-animate/angular-animate',
		'angular-ui-router': '../../src/vendor/libs/angular-ui-router/angular-ui-router',
		'angular-google-maps': '../../src/vendor/libs/angular-google-maps/angular-google-maps',
		'angular-bootstrap': '../../src/vendor/libs/angular-bootstrap/ui-bootstrap-tpls',
		'angular-couch-potato': '../../src/vendor/libs/angular-couch-potato/angular-couch-potato',
		'angular-easyfb': '../../src/vendor/libs/angular-easyfb/angular-easyfb',
		'angular-google-plus': '../../src/vendor/libs/angular-google-plus/angular-google-plus',
		'angular-gettext': '../../src/vendor/libs/angular-gettext/angular-gettext',

		// Bootstrap dependencies
		'bootstrap': '../../src/vendor/libs/bootstrap/bootstrap',
		'bootstrap-colorpicker': '../../src/vendor/libs/bootstrap-colorpicker/bootstrap-colorpicker',
		'bootstrap-duallistbox': '../../src/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox',
		'bootstrap-markdown': '../../src/vendor/libs/bootstrap-markdown/bootstrap-markdown',
		'bootstrap-slider': '../../src/vendor/libs/bootstrap-slider/bootstrap-slider',
		'bootstrap-progressbar': '../../src/vendor/libs/bootstrap-progressbar/bootstrap-progressbar',
		'bootstrap-tagsinput': '../../src/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput',
		'bootstrap-timepicker': '../../src/vendor/libs/bootstrap-timepicker/bootstrap-timepicker',
		'bootstrap-validator': '../../src/vendor/libs/bootstrap-validator/bootstrap-validator',
		'clockpicker': '../../src/vendor/libs/bootstrap-clockpicker/bootstrap-clockpicker',
		'x-editable': '../../src/vendor/libs/bootstrap-editable/bootstrap-editable',

		// Datatables dependencies and extensions
		'datatables': '../../src/vendor/libs/datatables/datatables',
		'datatables-bootstrap': '../../src/vendor/libs/datatables-bootstrap/datatables-bootstrap',
		'datatables-tools': '../../src/vendor/libs/datatables-tools/datatables-tools',
		'datatables-colvis': '../../src/vendor/libs/datatables-colvis/datatables-colvis',
		'datatables-responsive': '../../src/vendor/libs/datatables-responsive/datatables-responsive',

		// Smart Admin plugins
		'chartjs': '../../src/vendor/smart-admin-plugins/chartjs/chart.min',
		'dygraphs': '../../src/vendor/smart-admin-plugins/dygraphs/dygraph-combined.min',
		'dygraphs-demo': '../../src/vendor/smart-admin-plugins/dygraphs/demo-data.min',
		'superbox': '../../src/vendor/smart-admin-plugins/superbox/superbox.min',
		'jquery-jvectormap': '../../src/vendor/smart-admin-plugins/vectormap/jquery-jvectormap-1.2.2.min',
		'jquery-jvectormap-world-mill-en': '../../src/vendor/smart-admin-plugins/vectormap/jquery-jvectormap-world-mill-en',
		'fullcalendar': '../../src/vendor/smart-admin-plugins/fullcalendar/jquery.fullcalendar.min',
		'smartwidgets': '../../src/vendor/smart-admin-plugins/smartwidgets/jarvis.widget.min',
		'notification': '../../src/vendor/smart-admin-plugins/notification/SmartNotification.min',
		'raphael': '../../src/vendor/smart-admin-plugins/morris/raphael.min',
		'morris': '../../src/vendor/smart-admin-plugins/morris/morris.min',
		'flot': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.cust.min',
		'flot-resize': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.resize.min',
		'flot-fillbetween': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.orderBar.min',
		'flot-pie': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.pie.min',
		'flot-time': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.time.min',
		'flot-tooltip': '../../src/vendor/smart-admin-plugins/flot/jquery.flot.tooltip.min',

		// Other libs
		'almond': '../../src/vendor/libs/almond/almond',
		'dropzone': '../../src/vendor/libs/dropzone/dropzone',
		'pace': '../../src/vendor/libs/pace/pace',
		'fastclick': '../../src/vendor/libs/fastclick/fastclick',
		'select2': '../../src/vendor/libs/select2/select2',
		'summernote': '../../src/vendor/libs/summernote/summernote',
		'he': '../../src/vendor/libs/he/he',
		'to-markdown': '../../src/vendor/libs/to-markdown/to-markdown',
		'markdown': '../../src/vendor/libs/markdown/markdown',
		'ckeditor': '../../src/vendor/libs/ckeditor/ckeditor',
		'moment': '../../src/vendor/libs/moment/moment',
		'moment-timezone': '../../src/vendor/libs/moment-timezone/moment-timezone',
		'domReady': '../../src/vendor/libs/requirejs-domready/requirejs-domready',
		'fuelux-wizard': '../../src/vendor/libs/fuelux/wizard',
		'lodash': '../../src/vendor/libs/lodash/lodash',

		// App paths
		'appConfig': '../../src/vendor/smart-admin-plugins/app.config.js',
		'globalSettings': '../../src/app/modules/global_settings',
		'angular-templates': '../../src/app/templates/module'
	},
	shim: {
		'angular': {'exports': 'angular', deps: ['jquery']},

		'angular-animate': {deps: ['angular']},
		'angular-mocks': {deps: ['angular']},
		'angular-resource': {deps: ['angular']},
		'angular-cookies': {deps: ['angular']},
		'angular-sanitize': {deps: ['angular']},
		'angular-bootstrap': {deps: ['angular']},
		'angular-ui-router': {deps: ['angular']},
		'angular-google-maps': {deps: ['angular']},
		'angular-gettext': {deps: ['angular']},

		'angular-couch-potato': {deps: ['angular']},

		'socket.io': {deps: ['angular']},

		'anim-in-out': {deps: ['angular-animate']},
		'angular-easyfb': {deps: ['angular']},
		'angular-google-plus': {deps: ['angular']},

		'select2': {deps: ['jquery']},
		'summernote': {deps: ['jquery']},

		'to-markdown': {deps: ['he']},

		'bootstrap-markdown': {deps: ['jquery', 'markdown', 'to-markdown']},

		'ckeditor': {deps: ['jquery']},

		'moment': {exports: 'moment'},
		'moment-timezone': {deps: ['moment']},
		'moment-timezone-data': {deps: ['moment']},
		'moment-helper': {deps: ['moment-timezone-data']},
		'bootstrap-daterangepicker': {deps: ['jquery', 'moment']},

		'flot': {deps: ['jquery']},
		'flot-resize': {deps: ['flot']},
		'flot-fillbetween': {deps: ['flot']},
		'flot-orderBar': {deps: ['flot']},
		'flot-pie': {deps: ['flot']},
		'flot-time': {deps: ['flot']},
		'flot-tooltip': {deps: ['flot']},

		'morris': {deps: ['raphael']},

		'datatables': {deps: ['jquery']},
		'datatables-colvis': {deps: ['datatables']},
		'datatables-tools': {deps: ['datatables']},
		'datatables-bootstrap': {deps: ['datatables', 'datatables-tools', 'datatables-colvis']},
		'datatables-responsive': {deps: ['datatables']},

		'jqgrid': {deps: ['jquery']},
		'jqgrid-locale-en': {deps: ['jqgrid']},

		'jquery-maskedinput': {deps: ['jquery']},
		'jquery-validation': {deps: ['jquery']},
		'jquery-form': {deps: ['jquery']},
		'jquery-color': {deps: ['jquery']},

		'jcrop': {deps: ['jquery-color']},

		'bootstrap-validator': {deps: ['jquery']},

		'bootstrap-timepicker': {deps: ['jquery']},
		'clockpicker': {deps: ['jquery']},
		'nouislider': {deps: ['jquery']},
		'ionslider': {deps: ['jquery']},
		'bootstrap-duallistbox': {deps: ['jquery']},
		'bootstrap-colorpicker': {deps: ['jquery']},
		'jquery-knob': {deps: ['jquery']},
		'bootstrap-slider': {deps: ['jquery']},
		'bootstrap-tagsinput': {deps: ['jquery']},
		'x-editable': {deps: ['jquery']},

		'fuelux-wizard': {deps: ['jquery']},
		'bootstrap': {deps: ['jquery']},

		'magnific-popup': {deps: ['jquery']},
		'modules-includes': {deps: ['angular']},
		'sparkline': {deps: ['jquery']},
		'easy-pie': {deps: ['jquery']},
		'jquery-jvectormap': {deps: ['jquery']},
		'jquery-jvectormap-world-mill-en': {deps: ['jquery']},

		'dropzone': {deps: ['jquery']},

		'bootstrap-progressbar': {deps: ['bootstrap']},


		'jquery-ui': {deps: ['jquery']},
		'jquery-nestable': {deps: ['jquery']},

		'superbox': {deps: ['jquery']},

		'notification': {deps: ['jquery']},

		'smartwidgets': {deps: ['jquery-ui']},

		'templates': {deps: ['angular']}

	},
	priority: [
		'jquery',
		'bootstrap',
		'angular'
	],

	// ask Require.js to load these files (all our tests)
	deps: tests,

	// start test run, once Require.js is done
	callback: window.__karma__.start
});
