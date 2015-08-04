define(['angular',
	'angular-couch-potato',
	'angular-ui-router'], function (ng, couchPotato) {

	"use strict";


	var module = ng.module('app.demo.forms', ['ui.router']);


	couchPotato.configureApp(module);

	module.config(function ($stateProvider, $couchPotatoProvider) {

		$stateProvider
			.state('app.demo.form', {
				abstract: true,
				data: {
					title: 'Forms'
				}
			})

			.state('app.demo.form.bootstrapForms', {
				url: '/form/bootstrap-forms',
				data: {
					title: 'Bootstrap Forms'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/bootstrap-forms.html'
					}
				}
			})

			.state('app.demo.form.bootstrapValidation', {
				url: '/form/bootstrap-validation',
				data: {
					title: 'Bootstrap Validation'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/bootstrap-validation.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapMovieForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapTogglingForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapAttributeForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapButtonGroupForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapProductForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapProfileForm',
								'apps/demo/modules/forms/directives/bootstrap-validation/bootstrapContactForm'
							])
						}
					}
				}
			})

			.state('app.demo.form.plugins', {
				url: '/form/plugins',
				data: {
					title: 'Form Plugins'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/form-plugins.html',
						controller: 'FormPluginsCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/directives/input/smartSpinner',
								'apps/demo/modules/forms/directives/input/smartDatepicker',
								'apps/demo/modules/forms/directives/input/smartTimepicker',
								'apps/demo/modules/forms/directives/input/smartClockpicker',
								'apps/demo/modules/forms/directives/input/smartNouislider',
								'apps/demo/modules/forms/directives/input/smartIonslider',
								'apps/demo/modules/forms/directives/input/smartDuallistbox',
								'apps/demo/modules/forms/directives/input/smartColorpicker',
								'apps/demo/modules/forms/directives/input/smartKnob',
								'apps/demo/modules/forms/directives/input/smartUislider',
								'apps/demo/modules/forms/directives/input/smartSelect2',
								'apps/demo/modules/forms/directives/input/smartMaskedInput',
								'apps/demo/modules/forms/directives/input/smartTagsinput',
								'apps/demo/modules/forms/directives/input/smartXEditable',
								'apps/demo/modules/forms/controllers/FormXeditableCtrl',
								'apps/demo/modules/forms/controllers/FormPluginsCtrl'
							])
						}
					}
				}
			})
			.state('app.demo.form.wizards', {
				url: '/form/wizards',
				data: {
					title: 'Wizards'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/form-wizards.html',
						controller: 'FormWizardCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/directives/wizard/smartWizard',
								'apps/demo/modules/forms/directives/wizard/smartFueluxWizard',
								'apps/demo/modules/forms/directives/input/smartMaskedInput',
								'apps/demo/modules/forms/controllers/FormWizardCtrl'
							])
						}
					}
				}
			})
			.state('app.demo.form.editors', {
				url: '/form/editors',
				data: {
					title: 'Editors'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/form-editors.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/directives/editors/smartMarkdownEditor',
								'apps/demo/modules/forms/directives/editors/smartSummernoteEditor',
								'apps/demo/modules/forms/directives/editors/smartEditSummernote',
								'apps/demo/modules/forms/directives/editors/smartDestroySummernote'
							])
						}
					}
				}
			})
			.state('app.demo.form.dropzone', {
				url: '/form/dropzone',
				data: {
					title: 'Dropzone'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/dropzone.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/directives/upload/smartDropzone'
							])
						}
					}
				}
			})
			.state('app.demo.form.imageEditor', {
				url: '/form/image-editor',
				data: {
					title: 'Image Editor'
				},
				views: {
					"content@app": {
						templateUrl: 'apps/demo/modules/forms/views/image-editor.html',
						controller: 'ImageEditorCtrl',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'apps/demo/modules/forms/controllers/ImageEditorCtrl',
								'apps/demo/modules/forms/directives/image-editor/smartJcrop'
							])
						}
					}
				}
			})


	});

	module.run(function ($couchPotato) {
		module.lazy = $couchPotato;
	});

	return module;

});
