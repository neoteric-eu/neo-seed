// Automatically inject Bower components into the app
module.exports = {
	js: {
		options: {
			destPrefix: 'src/vendor/libs'
		},
		files: {
			'angular/angular.js': 'angular/angular.js',
			'angular-animate/angular-animate.js': 'angular-animate/angular-animate.js',
			'angular-bootstrap/ui-bootstrap.js': 'angular-bootstrap/ui-bootstrap.js',
			'angular-bootstrap/ui-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js',
			'angular-couch-potato/angular-couch-potato.js': 'angular-couch-potato/dist/angular-couch-potato.js',
			'angular-debounce/angular-debounce.js': 'ng-debounce/angular-debounce.js',
			'angular-easyfb/angular-easyfb.js': 'angular-easyfb/angular-easyfb.js',
			'angular-gettext/angular-gettext.js': 'angular-gettext/dist/angular-gettext.js',
			'angular-google-maps/angular-google-maps.js': 'angular-google-maps/dist/angular-google-maps.js',
			'angular-google-plus/angular-google-plus.js': 'angular-google-plus/dist/angular-google-plus.js',
			'angular-local-storage/angular-local-storage.js': 'angular-local-storage/dist/angular-local-storage.js',
			'angular-mocks/angular-mocks.js': 'angular-mocks/angular-mocks.js',
			'angular-moment/angular-moment.js': 'angular-moment/angular-moment.js',
			'angular-resource/angular-resource.js': 'angular-resource/angular-resource.js',
			'angular-sanitize/angular-sanitize.js': 'angular-sanitize/angular-sanitize.js',
			'angular-ui-date/angular-ui-date.js': 'angular-ui-date/src/date.js',
			'angular-ui-router/angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.js',
			'angular-ui-router-extras': 'ui-router-extras/release/modular',
			'angular-ui-select/angular-ui-select.js': 'angular-ui-select/dist/select.js',
			'angular-xeditable/dist/js/xeditable.js': 'angular-xeditable/dist/js/xeditable.js',
			'angular-table/angular-table.js': 'ng-table/dist/ng-table.js',
			'angular-restmod/angular-restmod.js': 'angular-restmod/dist/angular-restmod-bundle.js',
			'angular-restmod/styles/ams.js': 'angular-restmod/dist/styles/ams.js',
			'angular-restmod/plugins': 'angular-restmod/dist/plugins/*.min.js',
			'angular-gridster/angular-gridster.js': 'angular-gridster/src/angular-gridster.js',
			'angular-file-upload/angular-file-upload.js': 'ng-file-upload/ng-file-upload.js',

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
			'datatables-responsive/datatables-responsive.js': 'datatables-responsive/js/dataTables.responsive.js',
			'datatables-tools/datatables-tools.js': 'datatables-tabletools/js/dataTables.tableTools.js',

			'jquery/jquery.js': 'jquery/dist/jquery.js',
			'jquery-bridget/jquery.bridget.js': 'jquery-bridget/jquery.bridget.js',
			'jquery-jcrop/jquery-jcrop.js': 'jcrop/js/jquery.Jcrop.js',
			'jquery-jqgrid/jquery-jqgrid.js': 'jqgrid/js/minified/jquery.jqGrid.min.js',
			'jquery-jqgrid/i18n': 'jqgrid/js/i18n',
			'jquery-easypiechart/jquery-easypiechart.js': 'jquery.easy-pie-chart/dist/jquery.easypiechart.js',
			'jquery-color/jquery-color.js': 'jquery-color/jquery.color.js',
			'jquery-form/jquery-form.js': 'jquery-form/jquery.form.js',
			'jquery-jvectormap/jquery-jvectormap.js': 'jvectormap/jquery-jvectormap.js',
			'jquery-knob/jquery-knob.js': 'jquery-knob/js/jquery.knob.js',
			'jquery-maskedinput/jquery-maskedinput.js': 'jquery-maskedinput/dist/jquery.maskedinput.js',
			'jquery-nestable/jquery-nestable.js': 'jquery-nestable/jquery.nestable.js',
			'jquery-ui/jquery-ui.js': 'jquery-ui/jquery-ui.js',
			'jquery-ui/i18n': 'jquery-ui/ui/i18n',
			'jquery-ui/': 'jquery-ui/ui/*.js',
			'jquery-nouislider/jquery-nouislider.js': 'nouislider/distribute/jquery.nouislider.js',
			'jquery-sparkline/jquery-sparkline.js': 'relayfoods-jquery.sparkline/dist/jquery.sparkline.js',
			'jquery-validation/jquery-validate.js': 'jquery-validation/dist/jquery.validate.js',
			'jquery-magnificpopup/jquery-magnificpopup.js': 'magnific-popup/dist/jquery.magnific-popup.js',
			'jquery-resize/jquery-resize.js': 'javascript-detect-element-resize/jquery.resize.js',

			'requirejs-domready/requirejs-domready.js': 'requirejs-domready/domReady.js',

			'es5-shim/es5-shim.min.js': 'es5-shim/es5-shim.min.js',
			'json3/json3.min.js': 'json3/lib/json3.min.js',

			'dropzone/dropzone.js': 'dropzone/downloads/dropzone.js',
			'almond/almond.js': 'almond/almond.js',
			'ckeditor': 'ckeditor',
			'fastclick/fastclick.js': 'fastclick/lib/fastclick.js',
			'fuelux/wizard.js': 'fuelux/js/wizard.js',
			'he/he.js': 'he/he.js',
			'ionslider/ionslider.js': 'ion.rangeSlider/js/ion.rangeSlider.js',
			'lodash/lodash.js': 'lodash/lodash.js',
			'lodash-deep/lodash-deep.js': 'lodash-deep/lodash-deep.js',
			'markdown/markdown.js': 'markdown/lib/markdown.js',
			'moment/moment.js': 'moment/min/moment-with-locales.js',
			'moment-timezone/moment-timezone.js': 'moment-timezone/builds/moment-timezone-with-data.js',
			'morris/morris.js': 'morris.js/morris.js',
			'pace/pace.js': '/pace/pace.js',
			'pace/themes': '/pace/themes',
			'raphael/raphael.js': 'raphael/raphael.js',
			'raven/raven.js': 'raven-js/dist/raven.js',
			'select2/select2.js': 'select2/select2.js',
			'summernote/summernote.js': 'summernote/dist/summernote.js',
			'to-markdown/to-markdown.js': 'to-markdown/src/to-markdown.js',

			'form-validation/form-validation.js': 'form.validation/dist/js/formValidation.js',
			'form-validation/framework/bootstrap.js' : 'form.validation/dist/js/framework/bootstrap.js',
			'form-validation/language/': 'form.validation/dist/js/language/'
		}
	},
	require: {
		options: {
			destPrefix: 'src/app'
		},
		files: {
			'require.js': 'requirejs/require.js'
		}
	},
	css: {
		options: {
			destPrefix: 'src/styles/css/vendor'
		},
		files: {
			'form-validation/formValidation.css' : 'form.validation/dist/css/formValidation.css',
			'select2/select2.css': 'select2/select2.css',
			'select2/select2-bootstrap.css': 'select2/select2-bootstrap.css',
			'ui-select/select.css': 'angular-ui-select/dist/select.css'
		}
	},
	less: {
		options: {
			destPrefix: 'src/styles/less/vendor/libs'
		},
		files: {
			'bootstrap': 'bootstrap/less',
			'elements/elements.less': 'less-elements/elements.less',
			'animate/animate.less': 'animate.less/animate.less',
			'animate/source': 'animate.less/source',
			'font-awesome/': 'fontawesome/less',
			'angular-gridster/angular-gridster.less': 'angular-gridster/src/angular-gridster.less'
		}
	},
	fonts: {
		options: {
			destPrefix: 'src/styles/fonts'
		},
		files: {
			'font-awesome': 'fontawesome/fonts/',
			'glyphicons': 'bootstrap/fonts/'
		}
	}
};
