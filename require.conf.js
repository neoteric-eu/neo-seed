// jshint unused: false
requirejs.config({
	paths: {
		// jQuery dependencies
		'jquery-color': 'assets/js/vendor/libs/jquery-color/jquery-color',
		'jqgrid': 'assets/js/vendor/libs/jquery-jqgrid/jquery-jqgrid',
		'jqgrid-locale-en': 'assets/js/vendor/libs/jquery-jqgrid/i18n/grid.locale-en',
		'jquery-maskedinput': 'assets/js/vendor/libs/jquery-maskedinput/jquery-maskedinput',
		'jquery-validation': 'assets/js/vendor/libs/jquery-validation/jquery-validate',
		'jquery-form': 'assets/js/vendor/libs/jquery-form/jquery-form',
		'sparkline': 'assets/js/vendor/libs/jquery-sparkline/jquery-sparkline',
		'easy-pie': 'assets/js/vendor/libs/jquery-easypiechart/jquery-easypiechart',
		'nouislider': 'assets/js/vendor/libs/jquery-nouislider/jquery-nouislider',
		'ionslider': 'assets/js/vendor/libs/ionslider/ionslider',
		'jquery-knob': 'assets/js/vendor/libs/jquery-knob/jquery-knob',
		'jquery-nestable': 'assets/js/vendor/libs/jquery-nestable/jquery-nestable',
		'jcrop': 'assets/js/vendor/libs/jquery-jcrop/jquery-jcrop',
		'magnific-popup': 'assets/js/vendor/libs/jquery-magnificpopup/jquery-magnificpopup',

		// Angular dependencies
		'angular-resource': 'assets/js/vendor/libs/angular-resource/angular-resource',
		'angular-google-maps': 'assets/js/vendor/libs/angular-google-maps/angular-google-maps',
		'angular-couch-potato': 'assets/js/vendor/libs/angular-couch-potato/angular-couch-potato',
		'angular-easyfb': 'assets/js/vendor/libs/angular-easyfb/angular-easyfb',
		'angular-google-plus': 'assets/js/vendor/libs/angular-google-plus/angular-google-plus',

		// Bootstrap dependencies
		'bootstrap': 'assets/js/vendor/libs/bootstrap/bootstrap',
		'bootstrap-colorpicker': 'assets/js/vendor/libs/bootstrap-colorpicker/bootstrap-colorpicker',
		'bootstrap-duallistbox': 'assets/js/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox',
		'bootstrap-markdown': 'assets/js/vendor/libs/bootstrap-markdown/bootstrap-markdown',
		'bootstrap-slider': 'assets/js/vendor/libs/bootstrap-slider/bootstrap-slider',
		'bootstrap-progressbar': 'assets/js/vendor/libs/bootstrap-progressbar/bootstrap-progressbar',
		'bootstrap-tagsinput': 'assets/js/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput',
		'bootstrap-timepicker': 'assets/js/vendor/libs/bootstrap-timepicker/bootstrap-timepicker',
		'bootstrap-validator': 'assets/js/vendor/libs/bootstrap-validator/bootstrap-validator',
		'clockpicker': 'assets/js/vendor/libs/bootstrap-clockpicker/bootstrap-clockpicker',
		'x-editable': 'assets/js/vendor/libs/bootstrap-editable/bootstrap-editable',

		// Datatables dependencies and extensions
		'datatables': 'assets/js/vendor/libs/datatables/datatables',
		'datatables-bootstrap': 'assets/js/vendor/libs/datatables-bootstrap/datatables-bootstrap',
		'datatables-tools': 'assets/js/vendor/libs/datatables-tools/datatables-tools',
		'datatables-colvis': 'assets/js/vendor/libs/datatables-colvis/datatables-colvis',
		'datatables-responsive': 'assets/js/vendor/libs/datatables-responsive/datatables-responsive',

		// Smart Admin plugins
		'chartjs': 'assets/js/vendor/smartadmin/chartjs/chart.min',
		'dygraphs': 'assets/js/vendor/smartadmin/dygraphs/dygraph-combined.min',
		'dygraphs-demo': 'assets/js/vendor/smartadmin/dygraphs/demo-data.min',
		'superbox': 'assets/js/vendor/smartadmin/superbox/superbox.min',
		'jquery-jvectormap': 'assets/js/vendor/smartadmin/vectormap/jquery-jvectormap-1.2.2.min',
		'jquery-jvectormap-world-mill-en': 'assets/js/vendor/smartadmin/vectormap/jquery-jvectormap-world-mill-en',
		'fullcalendar': 'assets/js/vendor/smartadmin/fullcalendar/jquery.fullcalendar.min',
		'smartwidgets': 'assets/js/vendor/smartadmin/smartwidgets/jarvis.widget',
		'notification': 'assets/js/vendor/smartadmin/notification/SmartNotification',
		'flot': 'assets/js/vendor/smartadmin/flot/jquery.flot.cust.min',
		'flot-resize': 'assets/js/vendor/smartadmin/flot/jquery.flot.resize.min',
		'flot-fillbetween': 'assets/js/vendor/smartadmin/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': 'assets/js/vendor/smartadmin/flot/jquery.flot.orderBar.min',
		'flot-pie': 'assets/js/vendor/smartadmin/flot/jquery.flot.pie.min',
		'flot-time': 'assets/js/vendor/smartadmin/flot/jquery.flot.time.min',
		'flot-tooltip': 'assets/js/vendor/smartadmin/flot/jquery.flot.tooltip.min',

		// Other libs
		'dropzone': 'assets/js/vendor/libs/dropzone/dropzone',
		'pace': 'assets/js/vendor/libs/pace/pace',
		'fastclick': 'assets/js/vendor/libs/fastclick/fastclick',
		'select2': 'assets/js/vendor/libs/select2/select2',
		'summernote': 'assets/js/vendor/libs/summernote/summernote',
		'he': 'assets/js/vendor/libs/he/he',
		'to-markdown': 'assets/js/vendor/libs/to-markdown/to-markdown',
		'markdown': 'assets/js/vendor/libs/markdown/markdown',
		'ckeditor': 'assets/js/vendor/libs/ckeditor/ckeditor',
		'moment': 'assets/js/vendor/libs/moment/moment',
		'moment-timezone': 'assets/js/vendor/libs/moment-timezone/moment-timezone',
		'fuelux-wizard': 'assets/js/vendor/libs/fuelux/wizard',

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
