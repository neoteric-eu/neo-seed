// jshint unused: false
var requirejs = {
	paths: {
		// jQuery dependencies
		'jquery': '../vendor/libs/jquery/jquery',
		'jquery-ui': '../vendor/libs/jquery-ui/jquery-ui',
		'jquery-color': '../vendor/libs/jquery-color/jquery-color',
		'jqgrid': '../vendor/libs/jquery-jqgrid/jquery-jqgrid',
		'jqgrid-locale-en': '../vendor/libs/jquery-jqgrid/i18n/grid.locale-en',
		'jquery-maskedinput': '../vendor/libs/jquery-maskedinput/jquery-maskedinput',
		'jquery-validation': '../vendor/libs/jquery-validation/jquery-validate',
		'jquery-form': '../vendor/libs/jquery-form/jquery-form',
		'sparkline': '../vendor/libs/jquery-sparkline/jquery-sparkline',
		'easy-pie': '../vendor/libs/jquery-easypiechart/jquery-easypiechart',
		'nouislider': '../vendor/libs/jquery-nouislider/jquery-nouislider',
		'ionslider': '../vendor/libs/ionslider/ionslider',
		'jquery-knob': '../vendor/libs/jquery-knob/jquery-knob',
		'jquery-nestable': '../vendor/libs/jquery-nestable/jquery-nestable',
		'jcrop': '../vendor/libs/jquery-jcrop/jquery-jcrop',
		'magnific-popup': '../vendor/libs/jquery-magnificpopup/jquery-magnificpopup',

		// Angular dependencies
		'angular': '../vendor/libs/angular/angular',
		'angular-cookies': '../vendor/libs/angular-cookies/angular-cookies',
		'angular-resource': '../vendor/libs/angular-resource/angular-resource',
		'angular-sanitize': '../vendor/libs/angular-sanitize/angular-sanitize',
		'angular-animate': '../vendor/libs/angular-animate/angular-animate',
		'angular-ui-router': '../vendor/libs/angular-ui-router/angular-ui-router',
		'angular-google-maps': '../vendor/libs/angular-google-maps/angular-google-maps',
		'angular-bootstrap': '../vendor/libs/angular-bootstrap/ui-bootstrap-tpls',
		'angular-couch-potato': '../vendor/libs/angular-couch-potato/angular-couch-potato',
		'angular-easyfb': '../vendor/libs/angular-easyfb/angular-easyfb',
		'angular-google-plus': '../vendor/libs/angular-google-plus/angular-google-plus',
		'angular-gettext': '../vendor/libs/angular-gettext/angular-gettext',
		'angular-mocks': '../../src/vendor/libs/angular-mocks/angular-mocks',

		// Bootstrap dependencies
		'bootstrap': '../vendor/libs/bootstrap/bootstrap',
		'bootstrap-colorpicker': '../vendor/libs/bootstrap-colorpicker/bootstrap-colorpicker',
		'bootstrap-duallistbox': '../vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox',
		'bootstrap-markdown': '../vendor/libs/bootstrap-markdown/bootstrap-markdown',
		'bootstrap-slider': '../vendor/libs/bootstrap-slider/bootstrap-slider',
		'bootstrap-progressbar': '../vendor/libs/bootstrap-progressbar/bootstrap-progressbar',
		'bootstrap-tagsinput': '../vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput',
		'bootstrap-timepicker': '../vendor/libs/bootstrap-timepicker/bootstrap-timepicker',
		'bootstrap-validator': '../vendor/libs/bootstrap-validator/bootstrap-validator',
		'clockpicker': '../vendor/libs/bootstrap-clockpicker/bootstrap-clockpicker',
		'x-editable': '../vendor/libs/bootstrap-editable/bootstrap-editable',

		// Datatables dependencies and extensions
		'datatables': '../vendor/libs/datatables/datatables',
		'datatables-bootstrap': '../vendor/libs/datatables-bootstrap/datatables-bootstrap',
		'datatables-tools': '../vendor/libs/datatables-tools/datatables-tools',
		'datatables-colvis': '../vendor/libs/datatables-colvis/datatables-colvis',
		'datatables-responsive': '../vendor/libs/datatables-responsive/datatables-responsive',

		// Smart Admin plugins
		'chartjs': '../vendor/smart-admin-plugins/chartjs/chart.min',
		'dygraphs': '../vendor/smart-admin-plugins/dygraphs/dygraph-combined.min',
		'dygraphs-demo': '../vendor/smart-admin-plugins/dygraphs/demo-data.min',
		'superbox': '../vendor/smart-admin-plugins/superbox/superbox.min',
		'jquery-jvectormap': '../vendor/smart-admin-plugins/vectormap/jquery-jvectormap-1.2.2.min',
		'jquery-jvectormap-world-mill-en': '../vendor/smart-admin-plugins/vectormap/jquery-jvectormap-world-mill-en',
		'fullcalendar': '../vendor/smart-admin-plugins/fullcalendar/jquery.fullcalendar.min',
		'smartwidgets': '../vendor/smart-admin-plugins/smartwidgets/jarvis.widget.min',
		'notification': '../vendor/smart-admin-plugins/notification/SmartNotification.min',
		'raphael': '../vendor/smart-admin-plugins/morris/raphael.min',
		'morris': '../vendor/smart-admin-plugins/morris/morris.min',
		'flot': '../vendor/smart-admin-plugins/flot/jquery.flot.cust.min',
		'flot-resize': '../vendor/smart-admin-plugins/flot/jquery.flot.resize.min',
		'flot-fillbetween': '../vendor/smart-admin-plugins/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': '../vendor/smart-admin-plugins/flot/jquery.flot.orderBar.min',
		'flot-pie': '../vendor/smart-admin-plugins/flot/jquery.flot.pie.min',
		'flot-time': '../vendor/smart-admin-plugins/flot/jquery.flot.time.min',
		'flot-tooltip': '../vendor/smart-admin-plugins/flot/jquery.flot.tooltip.min',

		// Other libs
		'almond': '../vendor/libs/almond/almond',
		'dropzone': '../vendor/libs/dropzone/dropzone',
		'pace': '../vendor/libs/pace/pace',
		'fastclick': '../vendor/libs/fastclick/fastclick',
		'select2': '../vendor/libs/select2/select2',
		'summernote': '../vendor/libs/summernote/summernote',
		'he': '../vendor/libs/he/he',
		'to-markdown': '../vendor/libs/to-markdown/to-markdown',
		'markdown': '../vendor/libs/markdown/markdown',
		'ckeditor': '../vendor/libs/ckeditor/ckeditor',
		'moment': '../vendor/libs/moment/moment',
		'moment-timezone': '../vendor/libs/moment-timezone/moment-timezone',
		'domReady': '../vendor/libs/requirejs-domready/requirejs-domready',
		'fuelux-wizard': '../vendor/libs/fuelux/wizard',
		'lodash': '../vendor/libs/lodash/lodash',

		// App paths
		'appConfig': '../vendor/smart-admin-plugins/app.config',
		'globalSettings': 'modules/global_settings',
		'angular-templates': 'templates/module'
	},
	shim: {
		// jQuery dependencies
		'dropzone': {deps: ['jquery']},
		'easy-pie': {deps: ['jquery']},
		'ionslider': {deps: ['jquery']},
		'jcrop': {deps: ['jquery-color']},
		'jquery-color': {deps: ['jquery']},
		'jquery-form': {deps: ['jquery']},
		'jquery-knob': {deps: ['jquery']},
		'jquery-maskedinput': {deps: ['jquery']},
		'jquery-nestable': {deps: ['jquery']},
		'jquery-ui': {deps: ['jquery']},
		'jquery-validation': {deps: ['jquery']},
		'jqgrid': {deps: ['jquery']},
		'jqgrid-locale-en': {deps: ['jquery', 'jqgrid']},
		'magnific-popup': {deps: ['jquery']},
		'nouislider': {deps: ['jquery']},
		'sparkline': {deps: ['jquery']},

		// Angular dependencies
		'angular': {'exports': 'angular', deps: ['jquery']},
		'angular-animate': {deps: ['angular']},
		'angular-bootstrap': {deps: ['angular']},
		'angular-cookies': {deps: ['angular']},
		'angular-couch-potato': {deps: ['angular']},
		'angular-easyfb': {deps: ['angular']},
		'angular-gettext': {deps: ['angular']},
		'angular-google-maps': {deps: ['angular']},
		'angular-google-plus': {deps: ['angular']},
		'angular-resource': {deps: ['angular']},
		'angular-sanitize': {deps: ['angular']},
		'angular-ui-router': {deps: ['angular']},

		// Bootstrap dependencies
		'bootstrap': {deps: ['jquery']},
		'bootstrap-colorpicker': {deps: ['jquery']},
		'bootstrap-daterangepicker': {deps: ['jquery', 'moment']},
		'bootstrap-duallistbox': {deps: ['jquery']},
		'bootstrap-markdown': {deps: ['jquery', 'markdown', 'to-markdown']},
		'bootstrap-progressbar': {deps: ['bootstrap']},
		'bootstrap-slider': {deps: ['jquery']},
		'bootstrap-tagsinput': {deps: ['jquery']},
		'bootstrap-timepicker': {deps: ['jquery']},
		'bootstrap-validator': {deps: ['jquery']},
		'clockpicker': {deps: ['jquery']},
		'x-editable': {deps: ['jquery']},

		// Datatables dependencies and extensions
		'datatables': {deps: ['jquery']},
		'datatables-bootstrap': {deps: ['datatables', 'datatables-tools', 'datatables-colvis']},
		'datatables-colvis': {deps: ['datatables']},
		'datatables-responsive': {deps: ['datatables']},
		'datatables-tools': {deps: ['datatables']},

		// Smart Admin plugins
		'flot': {deps: ['jquery']},
		'flot-resize': {deps: ['flot']},
		'flot-fillbetween': {deps: ['flot']},
		'flot-orderBar': {deps: ['flot']},
		'flot-pie': {deps: ['flot']},
		'flot-time': {deps: ['flot']},
		'flot-tooltip': {deps: ['flot']},
		'jquery-jvectormap': {deps: ['jquery']},
		'jquery-jvectormap-world-mill-en': {deps: ['jquery']},
		'notification': {deps: ['jquery']},
		'smartwidgets': {deps: ['jquery-ui']},
		'superbox': {deps: ['jquery']},

		// Other libs
		'ckeditor': {deps: ['jquery']},
		'fuelux-wizard': {deps: ['jquery']},
		'moment': {exports: 'moment'},
		'moment-timezone': {deps: ['moment']},
		'moment-timezone-data': {deps: ['moment']},
		'moment-helper': {deps: ['moment-timezone-data']},
		'morris': {deps: ['raphael']},
		'select2': {deps: ['jquery']},
		'summernote': {deps: ['jquery']},
		'to-markdown': {deps: ['he']},

		// App paths
		'angular-templates': {deps: ['angular']}

	},
	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
};
