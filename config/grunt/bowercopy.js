// Automatically inject Bower components into the app
module.exports = {
	options: {
		clean: true
	},
	js: {
		options: {
			destPrefix: 'src/vendor/libs'
		},
		files: {
			'angular/angular.js': 'angular/angular.js',
			'angular-animate/angular-animate.js': 'angular-animate/angular-animate.js',
			'angular-bootstrap/ui-bootstrap.js': 'angular-bootstrap/ui-bootstrap.js',
			'angular-bootstrap/ui-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js',
			'angular-cookies/angular-cookies.js': 'angular-cookies/angular-cookies.js',
			'angular-couch-potato/angular-couch-potato.js': 'angular-couch-potato/dist/angular-couch-potato.js',
			'angular-easyfb/angular-easyfb.js': 'angular-easyfb/angular-easyfb.js',
			'angular-gettext/angular-gettext.js': 'angular-gettext/dist/angular-gettext.js',
			'angular-google-maps/angular-google-maps.js': 'angular-google-maps/dist/angular-google-maps.js',
			'angular-google-plus/angular-google-plus.js': 'angular-google-plus/dist/angular-google-plus.js',
			'angular-mocks/angular-mocks.js': 'angular-mocks/angular-mocks.js',
			'angular-resource/angular-resource.js': 'angular-resource/angular-resource.js',
			'angular-route/angular-route.js': 'angular-route/angular-route.js',
			'angular-sanitize/angular-sanitize.js': 'angular-sanitize/angular-sanitize.js',
			'angular-scenario/angular-scenario.js': 'angular-scenario/angular-scenario.js',
			'angular-touch/angular-touch.js': 'angular-touch/angular-touch.js',
			'angular-ui-router/angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.js',
			'angular-xeditable/dist/js/xeditable.js': 'angular-xeditable/dist/js/xeditable.js',
			'angular-cookie/angular-cookie.js': 'angular-cookie/angular-cookie.js',

			'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
			'bootstrap-timepicker/bootstrap-timepicker.js': 'bootstrap3-fontawesome-timepicker/js/bootstrap-timepicker.js',
			'bootstrap-colorpicker/bootstrap-colorpicker.js': 'bootstrap-colorpicker/js/bootstrap-colorpicker.js',
			'bootstrap-duallistbox/bootstrap-duallistbox.js': 'bootstrap-duallistbox/dist/jquery.bootstrap-duallistbox.js',
			'bootstrap-markdown/bootstrap-markdown.js': 'bootstrap-markdown/js/bootstrap-markdown.js',
			'bootstrap-progressbar/bootstrap-progressbar.js': 'bootstrap-progressbar/bootstrap-progressbar.js',
			'bootstrap-tagsinput/bootstrap-tagsinput.js': 'bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
			'bootstrap-validator/bootstrap-validator.js': 'bootstrapvalidator/dist/js/bootstrapValidator.js',
			'bootstrap-clockpicker/bootstrap-clockpicker.js': 'clockpicker/dist/bootstrap-clockpicker.js',
			'bootstrap-slider/bootstrap-slider.js': 'seiyria-bootstrap-slider/js/bootstrap-slider.js',
			'bootstrap-editable/bootstrap-editable.js': 'x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js',

			'datatables/datatables.js': 'datatables/media/js/jquery.dataTables.js',
			'datatables-colvis/datatables-colvis.js': 'datatables-colvis/js/dataTables.colVis.js',
			'datatables-bootstrap/datatables-bootstrap.js': 'datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.js',
			'datatables-responsive/datatables-responsive.js': 'datatables-responsive/files/1.10/js/datatables.responsive.js',
			'datatables-tools/datatables-tools.js': 'datatables-tabletools/js/dataTables.tableTools.js',

			'jquery/jquery.js': 'jquery/jquery.js',
			'jquery-jcrop/jquery-jcrop.js': 'jcrop/js/jquery.Jcrop.js',
			'jquery-jqgrid/jquery-jqgrid.js': 'jqgrid/js/minified/jquery.jqGrid.min.js',
			'jquery-jqgrid/i18n': 'jqgrid/js/i18n',
			'jquery-easypiechart/jquery-easypiechart.js': 'jquery.easy-pie-chart/dist/jquery.easypiechart.js',
			'jquery-color/jquery-color.js': 'jquery-color/jquery.color.js',
			'jquery-form/jquery-form.js': 'jquery-form/jquery.form.js',
			'jquery-knob/jquery-knob.js': 'jquery-knob/js/jquery.knob.js',
			'jquery-maskedinput/jquery-maskedinput.js': 'jquery-maskedinput/dist/jquery.maskedinput.js',
			'jquery-nestable/jquery-nestable.js': 'jquery-nestable/jquery.nestable.js',
			'jquery-ui/jquery-ui.js': 'jquery-ui/jquery-ui.js',
			'jquery-nouislider/jquery-nouislider.js': 'nouislider/distribute/jquery.nouislider.js',
			'jquery-sparkline/jquery-sparkline.js': 'relayfoods-jquery.sparkline/dist/jquery.sparkline.js',
			'jquery-validation/jquery-validate.js': 'jquery-validation/dist/jquery.validate.js',
			'jquery-magnificpopup/jquery-magnificpopup.js' : 'magnific-popup/dist/jquery.magnific-popup.js',

			'requirejs/require.js': 'requirejs/require.js',
			'requirejs-domready/requirejs-domready.js': 'requirejs-domready/domReady.js',

			'dropzone/dropzone.js': 'dropzone/downloads/dropzone.js',
			'almond/almond.js': 'almond/almond.js',
			'ckeditor': 'ckeditor',
			'fastclick/fastclick.js': 'fastclick/lib/fastclick.js',
			'es5-shim/es5-shim.js': 'es5-shim/es5-shim.js',
			'fuelux/wizard.js': 'fuelux/js/wizard.js',
			'he/he.js': 'he/he.js',
			'ionslider/ionslider.js': 'ion.rangeSlider/js/ion.rangeSlider.js',
			'lodash/lodash.js': 'lodash/dist/lodash.js',
			'markdown/markdown.js': 'markdown/lib/markdown.js',
			'moment/moment.js': 'moment/min/moment-with-locales.js',
			'moment-timezone/moment-timezone.js': 'moment-timezone/moment-timezone.js',
			'pace/pace.js': '/pace/pace.js',
			'pace/themes': '/pace/themes',
			'select2/select2.js': 'select2/select2.js',
			'summernote/summernote.js': 'summernote/dist/summernote.js',
			'to-markdown/to-markdown.js': 'to-markdown/src/to-markdown.js',

			// Unused deps?
			'autotype/autotype.js': 'autotype/index.js',
			'bluebird/bluebird.js': 'bluebird/js/browser/bluebird.js',
			'jquery-bridget/jquery.bridget.js': 'jquery-bridget/jquery.bridget.js',
			'json3/json3.js': 'json3/lib/json3.js',
			'modernizr/modernizr.js': 'modernizr/modernizr.js',
			'ng-table/ng-table.js': 'ng-table/ng-table.js',
			'raven/raven.js': 'raven-js/dist/raven.js',
			'jquery-jvectormap/jquery-jvectormap.js': 'jvectormap/jquery-jvectormap.js'
		}
	}
};
