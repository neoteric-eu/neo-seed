// jshint unused: false
requirejs.config({
	paths: {
		// jQuery dependencies
		'jquery-color': 'assets/vendor/js/jquery-color/jquery-color',
		'jqgrid': 'assets/vendor/js/jquery-jqgrid/jquery-jqgrid',
		'jqgrid-locale-en': 'assets/vendor/js/jquery-jqgrid/i18n/grid.locale-en',
		'jquery-maskedinput': 'assets/vendor/js/jquery-maskedinput/jquery-maskedinput',
		'jquery-validation': 'assets/vendor/js/jquery-validation/jquery-validate',
		'jquery-form': 'assets/vendor/js/jquery-form/jquery-form',
		'sparkline': 'assets/vendor/js/jquery-sparkline/jquery-sparkline',
		'easy-pie': 'assets/vendor/js/jquery-easypiechart/jquery-easypiechart',
		'nouislider': 'assets/vendor/js/jquery-nouislider/jquery-nouislider',
		'ionslider': 'assets/vendor/js/ionslider/ionslider',
		'jquery-knob': 'assets/vendor/js/jquery-knob/jquery-knob',
		'jquery-nestable': 'assets/vendor/js/jquery-nestable/jquery-nestable',
		'jcrop': 'assets/vendor/js/jquery-jcrop/jquery-jcrop',
		'magnific-popup': 'assets/vendor/js/jquery-magnificpopup/jquery-magnificpopup',

		// Angular dependencies
		'angular-resource': 'assets/vendor/js/angular-resource/angular-resource',
		'angular-google-maps': 'assets/vendor/js/angular-google-maps/angular-google-maps',
		'angular-couch-potato': 'assets/vendor/js/angular-couch-potato/angular-couch-potato',
		'angular-easyfb': 'assets/vendor/js/angular-easyfb/angular-easyfb',
		'angular-google-plus': 'assets/vendor/js/angular-google-plus/angular-google-plus',

		// Bootstrap dependencies
		'bootstrap': 'assets/vendor/js/bootstrap/bootstrap',
		'bootstrap-colorpicker': 'assets/vendor/js/bootstrap-colorpicker/bootstrap-colorpicker',
		'bootstrap-duallistbox': 'assets/vendor/js/bootstrap-duallistbox/bootstrap-duallistbox',
		'bootstrap-markdown': 'assets/vendor/js/bootstrap-markdown/bootstrap-markdown',
		'bootstrap-slider': 'assets/vendor/js/bootstrap-slider/bootstrap-slider',
		'bootstrap-progressbar': 'assets/vendor/js/bootstrap-progressbar/bootstrap-progressbar',
		'bootstrap-tagsinput': 'assets/vendor/js/bootstrap-tagsinput/bootstrap-tagsinput',
		'bootstrap-timepicker': 'assets/vendor/js/bootstrap-timepicker/bootstrap-timepicker',
		'bootstrap-validator': 'assets/vendor/js/bootstrap-validator/bootstrap-validator',
		'clockpicker': 'assets/vendor/js/bootstrap-clockpicker/bootstrap-clockpicker',
		'x-editable': 'assets/vendor/js/bootstrap-editable/bootstrap-editable',

		// Datatables dependencies and extensions
		'datatables': 'assets/vendor/js/datatables/datatables',
		'datatables-bootstrap': 'assets/vendor/js/datatables-bootstrap/datatables-bootstrap',
		'datatables-tools': 'assets/vendor/js/datatables-tools/datatables-tools',
		'datatables-colvis': 'assets/vendor/js/datatables-colvis/datatables-colvis',
		'datatables-responsive': 'assets/vendor/js/datatables-responsive/datatables-responsive',

		// Smart Admin plugins
		'chartjs': 'assets/seed/js/smartadmin/chartjs/chart.min',
		'dygraphs': 'assets/seed/js/smartadmin/dygraphs/dygraph-combined.min',
		'dygraphs-demo': 'assets/seed/js/smartadmin/dygraphs/demo-data.min',
		'superbox': 'assets/seed/js/smartadmin/superbox/superbox.min',
		'jquery-jvectormap': 'assets/seed/js/smartadmin/vectormap/jquery-jvectormap-1.2.2.min',
		'jquery-jvectormap-world-mill-en': 'assets/seed/js/smartadmin/vectormap/jquery-jvectormap-world-mill-en',
		'fullcalendar': 'assets/seed/js/smartadmin/fullcalendar/jquery.fullcalendar.min',
		'smartwidgets': 'assets/seed/js/smartadmin/smartwidgets/jarvis.widget',
		'notification': 'assets/seed/js/smartadmin/notification/SmartNotification',
		'flot': 'assets/seed/js/smartadmin/flot/jquery.flot.cust.min',
		'flot-resize': 'assets/seed/js/smartadmin/flot/jquery.flot.resize.min',
		'flot-fillbetween': 'assets/seed/js/smartadmin/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': 'assets/seed/js/smartadmin/flot/jquery.flot.orderBar.min',
		'flot-pie': 'assets/seed/js/smartadmin/flot/jquery.flot.pie.min',
		'flot-time': 'assets/seed/js/smartadmin/flot/jquery.flot.time.min',
		'flot-tooltip': 'assets/seed/js/smartadmin/flot/jquery.flot.tooltip.min',

		// Other libs
		'dropzone': 'assets/vendor/js/dropzone/dropzone',
		'pace': 'assets/vendor/js/pace/pace',
		'fastclick': 'assets/vendor/js/fastclick/fastclick',
		'select2': 'assets/vendor/js/select2/select2',
		'summernote': 'assets/vendor/js/summernote/summernote',
		'he': 'assets/vendor/js/he/he',
		'to-markdown': 'assets/vendor/js/to-markdown/to-markdown',
		'markdown': 'assets/vendor/js/markdown/markdown',
		'ckeditor': 'assets/vendor/js/ckeditor/ckeditor',
		'moment': 'assets/vendor/js/moment/moment',
		'moment-timezone': 'assets/vendor/js/moment-timezone/moment-timezone',
		'fuelux-wizard': 'assets/vendor/js/fuelux/wizard',

		// App paths
		'demoConf': 'apps/demo/app.conf'
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
		'jquery-ui/jquery-ui': {deps: ['jquery']},
		'jquery-validation': {deps: ['jquery']},
		'jqgrid': {deps: ['jquery']},
		'jqgrid-locale-en': {deps: ['jquery', 'jqgrid']},
		'magnific-popup': {deps: ['jquery']},
		'nouislider': {deps: ['jquery']},
		'sparkline': {deps: ['jquery']},

		// Angular dependencies
		'angular-couch-potato': {deps: ['angular']},
		'angular-easyfb': {deps: ['angular']},
		'angular-google-maps': {deps: ['angular']},
		'angular-google-plus': {deps: ['angular']},
		'angular-resource': {deps: ['angular']},

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
		'jquery-jvectormap-world-mill-en': {deps: ['jquery', 'jquery-jvectormap']},
		'notification': {deps: ['jquery']},
		'smartwidgets': {deps: ['jquery-ui/jquery-ui']},
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
		'to-markdown': {deps: ['he']}

		// App paths
	},
	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
});
