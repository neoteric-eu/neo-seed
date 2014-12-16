// jshint unused: false
var requirejs = {
	waitSeconds: 0,
	paths: {
		'jquery': [
			'//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
			'../vendor/bower_components/jquery/dist/jquery.min'
		],
		'jquery-ui': [
			'//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min',
			'../vendor/bower_components/jquery-ui/jquery-ui.min'
		],
		'bootstrap': [
			'//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min',
			'../vendor/bower_components/bootstrap/dist/js/bootstrap.min'
		],
		'angular': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular',
			'../vendor/bower_components/angular/angular.min'
		],
		'angular-cookies': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular-cookies.min',
			'../vendor/bower_components/angular-cookies/angular-cookies.min'
		],
		'angular-resource': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular-resource.min',
			'../vendor/bower_components/angular-resource/angular-resource.min'
		],
		'angular-sanitize': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular-sanitize.min',
			'../vendor/bower_components/angular-sanitize/angular-sanitize.min'
		],
		'angular-animate': [
			'//ajax.googleapis.com/ajax/libs/angularjs/1.2.27/angular-animate.min',
			'../vendor/bower_components/angular-animate/angular-animate.min'
		],

		'domReady': '../vendor/bower_components/requirejs-domready/domReady',

		'angular-ui-router': '../vendor/bower_components/angular-ui-router/release/angular-ui-router.min',

		'angular-google-maps': '../vendor/bower_components/angular-google-maps/dist/angular-google-maps.min',

		'angular-bootstrap': '../vendor/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',

		'angular-couch-potato': '../vendor/bower_components/angular-couch-potato/dist/angular-couch-potato',

		'angular-easyfb': '../vendor/bower_components/angular-easyfb/angular-easyfb.min',
		'angular-google-plus': '../vendor/bower_components/angular-google-plus/dist/angular-google-plus.min',

		'pace': '../vendor/bower_components/pace/pace.min',

		'fastclick': '../vendor/bower_components/fastclick/lib/fastclick',

		'jquery-color': '../vendor/bower_components/jquery-color/jquery.color',

		'select2': '../vendor/bower_components/select2/select2.min',

		'summernote': '../vendor/bower_components/summernote/dist/summernote.min',

		'he': '../vendor/bower_components/he/he',
		'to-markdown': '../vendor/bower_components/to-markdown/src/to-markdown',
		'markdown': '../vendor/bower_components/markdown/lib/markdown',
		'bootstrap-markdown': '../vendor/bower_components/bootstrap-markdown/js/bootstrap-markdown',

		'ckeditor': '../vendor/bower_components/ckeditor/ckeditor',

		'moment': '../vendor/bower_components/moment/min/moment-with-locales.min',
		'moment-timezone': '../vendor/bower_components/moment-timezone/moment-timezone',

		'sparkline': '../vendor/bower_components/relayfoods-jquery.sparkline/dist/jquery.sparkline.min',
		'easy-pie': '../vendor/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min',

		'flot': '../vendor/smart-admin-plugins/flot/jquery.flot.cust.min',
		'flot-resize': '../vendor/smart-admin-plugins/flot/jquery.flot.resize.min',
		'flot-fillbetween': '../vendor/smart-admin-plugins/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': '../vendor/smart-admin-plugins/flot/jquery.flot.orderBar.min',
		'flot-pie': '../vendor/smart-admin-plugins/flot/jquery.flot.pie.min',
		'flot-time': '../vendor/smart-admin-plugins/flot/jquery.flot.time.min',
		'flot-tooltip': '../vendor/smart-admin-plugins/flot/jquery.flot.tooltip.min',

		'raphael': '../vendor/smart-admin-plugins/morris/raphael.min',
		'morris': '../vendor/smart-admin-plugins/morris/morris.min',

		'dygraphs': '../vendor/smart-admin-plugins/dygraphs/dygraph-combined.min',
		'dygraphs-demo': '../vendor/smart-admin-plugins/dygraphs/demo-data.min',

		'chartjs': '../vendor/smart-admin-plugins/chartjs/chart.min',

		'datatables': '../vendor/bower_components/datatables/media/js/jquery.dataTables.min',
		'datatables-bootstrap': '../vendor/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap',
		'datatables-tools': '../vendor/bower_components/datatables-tabletools/js/dataTables.tableTools',
		'datatables-colvis': '../vendor/bower_components/datatables-colvis/js/dataTables.colVis',
		'datatables-responsive': '../vendor/bower_components/datatables-responsive/files/1.10/js/datatables.responsive',


		'jqgrid': '../vendor/bower_components/jqgrid/js/minified/jquery.jqGrid.min',
		'jqgrid-locale-en': '../vendor/bower_components/jqgrid/js/i18n/grid.locale-en',


		'jquery-maskedinput': '../vendor/bower_components/jquery-maskedinput/dist/jquery.maskedinput.min',
		'jquery-validation': '../vendor/bower_components/jquery-validation/dist/jquery.validate.min',
		'jquery-form': '../vendor/bower_components/jquery-form/jquery.form',

		'bootstrap-validator': '../vendor/bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min',

		'bootstrap-timepicker': '../vendor/bower_components/bootstrap3-fontawesome-timepicker/js/bootstrap-timepicker.min',
		'clockpicker': '../vendor/bower_components/clockpicker/dist/bootstrap-clockpicker.min',
		'nouislider': '../vendor/bower_components/nouislider/distribute/jquery.nouislider.min',
		'ionslider': '../vendor/bower_components/ion.rangeSlider/js/ion.rangeSlider.min',
		'bootstrap-duallistbox': '../vendor/bower_components/bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.min',
		'bootstrap-colorpicker': '../vendor/bower_components/bootstrap-colorpicker/js/bootstrap-colorpicker',
		'jquery-knob': '../vendor/bower_components/jquery-knob/dist/jquery.knob.min',
		'bootstrap-slider': '../vendor/bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min',
		'bootstrap-tagsinput': '../vendor/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min',
		'x-editable': '../vendor/bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.min',
		// 'angular-x-editable': '../vendor/bower_components/angular-xeditable/dist/js/xeditable.min',

		'fuelux-wizard': '../vendor/bower_components/fuelux/js/wizard',

		'dropzone': '../vendor/bower_components/dropzone/downloads/dropzone.min',

		'jcrop': '../vendor/bower_components/jcrop/js/jquery.Jcrop.min',


		'bootstrap-progressbar': '../vendor/bower_components/bootstrap-progressbar/bootstrap-progressbar.min',
		'jquery-nestable': '../vendor/bower_components/jquery-nestable/jquery.nestable',

		'superbox': '../vendor/smart-admin-plugins/superbox/superbox.min',

		'jquery-jvectormap': '../vendor/smart-admin-plugins/vectormap/jquery-jvectormap-1.2.2.min',
		'jquery-jvectormap-world-mill-en': '../vendor/smart-admin-plugins/vectormap/jquery-jvectormap-world-mill-en',


		'lodash': '../vendor/bower_components/lodash/dist/lodash.min',
		'angular-gettext': '../vendor/bower_components/angular-gettext/dist/angular-gettext.min',

		'magnific-popup': '../vendor/bower_components/magnific-popup/dist/jquery.magnific-popup',

		'fullcalendar': '../vendor/smart-admin-plugins/fullcalendar/jquery.fullcalendar.min',
		'smartwidgets': '../vendor/smart-admin-plugins/smartwidgets/jarvis.widget.min',
		'notification': '../vendor/smart-admin-plugins/notification/SmartNotification.min',

		// app js file includes
		'appConfig': '../vendor/smart-admin-plugins/app.config',
		'globalSettings': '../app/modules/global_settings'
	},
	shim: {
		'angular': {'exports': 'angular', deps: ['jquery']},

		'angular-animate': {deps: ['angular']},
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

		'smartwidgets': {deps: ['jquery-ui']}

	},
	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
};
