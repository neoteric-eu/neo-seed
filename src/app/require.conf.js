// jshint unused: false
requirejs.config({
	baseUrl: 'app/',

	paths: {
		// jQuery dependencies
		'jquery': '../vendor/libs/jquery/jquery',
		'jquery-ui': '../vendor/libs/jquery-ui',
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
		'angular-animate': '../vendor/libs/angular-animate/angular-animate',
		'angular-ui-router': '../vendor/libs/angular-ui-router/angular-ui-router',
		'angular-ui-router-extras-core': '../vendor/libs/angular-ui-router-extras/ct-ui-router-extras.core',
		'angular-ui-router-extras-dsr': '../vendor/libs/angular-ui-router-extras/ct-ui-router-extras.dsr',
		'angular-ui-router-extras-transition': '../vendor/libs/angular-ui-router-extras/ct-ui-router-extras.transition',
		'angular-ui-router-extras-previous': '../vendor/libs-custom/angular-ui-router-extras/ct-ui-router-extras.previous',
		'angular-ui-router-extras-sticky': '../vendor/libs/angular-ui-router-extras/ct-ui-router-extras.sticky',
		'angular-google-maps': '../vendor/libs/angular-google-maps/angular-google-maps',
		'angular-bootstrap': '../vendor/libs/angular-bootstrap/ui-bootstrap-tpls',
		'angular-couch-potato': '../vendor/libs/angular-couch-potato/angular-couch-potato',
		'angular-debounce': '../vendor/libs/angular-debounce/angular-debounce',
		'angular-easyfb': '../vendor/libs/angular-easyfb/angular-easyfb',
		'angular-google-plus': '../vendor/libs/angular-google-plus/angular-google-plus',
		'angular-gettext': '../vendor/libs/angular-gettext/angular-gettext',
		'angular-local-storage': '../vendor/libs/angular-local-storage/angular-local-storage',
		'angular-moment': '../vendor/libs/angular-moment/angular-moment',
		'angular-permission': '../vendor/libs-custom/angular-permission/angular-permission',
		'angular-restmod': '../vendor/libs/angular-restmod/angular-restmod',
		'angular-restmod-preload': '../vendor/libs/angular-restmod/plugins/preload.min',
		'angular-restmod-find-many': '../vendor/libs/angular-restmod/plugins/find-many.min',
		'angular-sanitize': '../vendor/libs/angular-sanitize/angular-sanitize',
		'angular-ui-select': '../vendor/libs/angular-ui-select/angular-ui-select',
		'angular-ui-date': '../vendor/libs/angular-ui-date/angular-ui-date',
		'angular-table': '../vendor/libs/angular-table/angular-table',

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
		'smartwidgets': '../vendor/smart-admin-plugins/smartwidgets/jarvis.widget',
		'notification': '../vendor/smart-admin-plugins/notification/SmartNotification',
		'flot': '../vendor/smart-admin-plugins/flot/jquery.flot.cust.min',
		'flot-resize': '../vendor/smart-admin-plugins/flot/jquery.flot.resize.min',
		'flot-fillbetween': '../vendor/smart-admin-plugins/flot/jquery.flot.fillbetween.min',
		'flot-orderBar': '../vendor/smart-admin-plugins/flot/jquery.flot.orderBar.min',
		'flot-pie': '../vendor/smart-admin-plugins/flot/jquery.flot.pie.min',
		'flot-time': '../vendor/smart-admin-plugins/flot/jquery.flot.time.min',
		'flot-tooltip': '../vendor/smart-admin-plugins/flot/jquery.flot.tooltip.min',

		// Other libs
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
		'lodash-deep': '../vendor/libs/lodash-deep/lodash-deep',
		'lodash-extensions': '../vendor/libs-custom/lodash-extensions/lodash-extensions',
		'raphael': '../vendor/libs/raphael/raphael',
		'morris': '../vendor/libs/morris/morris',

		'form-validation': '../vendor/libs/form-validation/form-validation',
		'form-validation-bootstrap': '../vendor/libs/form-validation/framework/bootstrap',

		// App paths
		'appConfig': 'app.conf',
		'globalSettings': 'modules/global_settings',
		'angular-templates': 'templates/module'
	},

	shim: {
		// jQuery dependencies
		'dropzone': ['jquery'],
		'easy-pie': ['jquery'],
		'ionslider': ['jquery'],
		'jcrop': ['jquery-color'],
		'jquery-color': ['jquery'],
		'jquery-form': ['jquery'],
		'jquery-knob': ['jquery'],
		'jquery-maskedinput': ['jquery'],
		'jquery-nestable': ['jquery'],
		'jquery-validation': ['jquery'],
		'jqgrid': ['jquery'],
		'jqgrid-locale-en': ['jquery', 'jqgrid'],
		'magnific-popup': ['jquery'],
		'nouislider': ['jquery'],
		'sparkline': ['jquery'],

		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},

		'angular-animate': ['angular'],
		'angular-bootstrap': ['angular'],
		'angular-cookie': ['angular'],
		'angular-couch-potato': ['angular'],
		'angular-easyfb': ['angular'],
		'angular-debounce': ['angular'],
		'angular-gettext': ['angular'],
		'angular-google-maps': ['angular'],
		'angular-google-plus': ['angular'],
		'angular-local-storage': ['angular'],
		'angular-mocks': ['angular'],
		'angular-restmod': ['angular'],
		'angular-restmod-preload': ['angular-restmod'],
		'angular-restmod-find-many': ['angular-restmod'],
		'angular-sanitize': ['angular'],
		'angular-ui-router': ['angular'],
		'angular-ui-router-extras-core': ['angular', 'angular-ui-router'],
		'angular-ui-router-extras-dsr': ['angular', 'angular-ui-router', 'angular-ui-router-extras-core'],
		'angular-ui-router-extras-previous': ['angular', 'angular-ui-router', 'angular-ui-router-extras-core', 'angular-ui-router-extras-transition'],
		'angular-ui-router-extras-transition': ['angular', 'angular-ui-router', 'angular-ui-router-extras-core'],
		'angular-ui-router-extras-sticky': ['angular', 'angular-ui-router', 'angular-ui-router-extras-core'],
		'angular-ui-select': ['angular'],
		'angular-ui-date': ['angular'],
		'angular-permission': ['angular'],
		'angular-table': ['angular'],

		// Bootstrap dependencies
		'bootstrap': ['jquery'],
		'bootstrap-colorpicker': ['jquery'],
		'bootstrap-daterangepicker': ['jquery', 'moment'],
		'bootstrap-duallistbox': ['jquery'],
		'bootstrap-markdown': ['jquery', 'markdown', 'to-markdown'],
		'bootstrap-progressbar': ['bootstrap'],
		'bootstrap-slider': ['jquery'],
		'bootstrap-tagsinput': ['jquery'],
		'bootstrap-timepicker': ['jquery'],
		'bootstrap-validator': ['jquery'],
		'clockpicker': ['jquery'],
		'x-editable': ['jquery'],

		// Datatables dependencies and extensions
		'datatables': ['jquery'],
		'datatables-bootstrap': ['datatables', 'datatables-tools', 'datatables-colvis'],
		'datatables-colvis': ['datatables'],
		'datatables-responsive': ['datatables'],
		'datatables-tools': ['datatables'],

		// Smart Admin plugins
		'flot': ['jquery'],
		'flot-resize': ['flot'],
		'flot-fillbetween': ['flot'],
		'flot-orderBar': ['flot'],
		'flot-pie': ['flot'],
		'flot-time': ['flot'],
		'flot-tooltip': ['flot'],
		'jquery-jvectormap': ['jquery'],
		'jquery-jvectormap-world-mill-en': ['jquery'],
		'notification': ['jquery'],
		'smartwidgets': ['jquery-ui/sortable'],
		'superbox': ['jquery'],

		// Other libs
		'ckeditor': ['jquery'],
		'fuelux-wizard': ['jquery'],
		'moment': {exports: 'moment'},
		'moment-timezone': ['moment'],
		'angular-moment': ['angular', 'moment'],
		'morris': ['raphael', 'jquery'],
		'select2': ['jquery'],
		'summernote': ['jquery'],
		'to-markdown': ['he'],
		'lodash-deep': ['lodash'],
		'lodash-extensions': ['lodash'],
		'form-validation': ['jquery'],
		'form-validation-bootstrap': ['bootstrap', 'form-validation'],


		// App paths
		'angular-templates': ['angular']

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
