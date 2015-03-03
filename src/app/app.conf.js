define(['globalSettings'], function (globalSettings) {
	'use strict';

	var appConfig = {};

	appConfig.menu_speed = 200;
	appConfig.smartSkin = 'smart-style-0';

	appConfig.skins = [
		{
			name: 'smart-style-0',
			logo: 'styles/img/logo.png',
			class: 'btn btn-block btn-xs txt-color-white margin-right-5',
			style: 'background-color:#4E463F;',
			label: 'Smart Default'
		},

		{
			name: 'smart-style-1',
			logo: 'styles/img/logo-white.png',
			class: 'btn btn-block btn-xs txt-color-white',
			style: 'background:#3A4558;',
			label: 'Dark Elegance'
		},

		{
			name: 'smart-style-2',
			logo: 'styles/img/logo-blue.png',
			class: 'btn btn-xs btn-block txt-color-darken margin-top-5',
			style: 'background:#fff;',
			label: 'Ultra Light'
		},

		{
			name: 'smart-style-3',
			logo: 'styles/img/logo-pale.png',
			class: 'btn btn-xs btn-block txt-color-white margin-top-5',
			style: 'background:#f78c40',
			label: 'Google Skin'
		},

		{
			name: 'smart-style-4',
			logo: 'styles/img/logo-pale.png',
			class: 'btn btn-xs btn-block txt-color-white margin-top-5',
			style: 'background: #bbc0cf; border: 1px solid #59779E; color: #17273D !important;',
			label: 'PixelSmash'
		},

		{
			name: 'smart-style-5',
			logo: 'styles/img/logo-pale.png',
			class: 'btn btn-xs btn-block txt-color-white margin-top-5',
			style: 'background: rgba(153, 179, 204, 0.2); border: 1px solid rgba(121, 161, 221, 0.8); color: #17273D !important;',
			label: 'Glass'
		}
	];


	appConfig.sound_path = 'styles/sounds/';
	appConfig.sound_on = true;

	/*
	 * DEBUGGING MODE
	 * debugState = true; will spit all debuging message inside browser console.
	 * The colors are best displayed in chrome browser.
	 */
	appConfig.debugState = globalSettings.get('DEBUG');
	appConfig.debugStyle = 'font-weight: bold; color: #00f;';
	appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
	appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
	appConfig.debugStyle_warning = 'background-color:yellow';
	appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
	appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';

	appConfig.voice_command = true;
	appConfig.voice_command_auto = false;
	appConfig.voice_command_lang = 'en-US';
	/*
	 *  Use localstorage to remember on/off (best used with HTML Version)
	 */
	appConfig.voice_localStorage = false;
	/*
	 * Voice Commands
	 * Defines all voice command variables and functions
	 */
	if (appConfig.voice_command) {

		appConfig.commands = {

			/**
			 * Description

			 */
			'show dashboard': function () {
				window.location.hash = 'dashboard';
			},
			/**
			 * Description
			 */
			'show inbox': function () {
				window.location.hash = 'inbox/';
			},
			/**
			 * Description
			 */
			'show graphs': function () {
				window.location.hash = 'graphs/flot';
			},
			/**
			 * Description
			 */
			'show flotchart': function () {
				window.location.hash = 'graphs/flot';
			},
			/**
			 * Description
			 */
			'show morris chart': function () {
				window.location.hash = 'graphs/morris';
			},
			/**
			 * Description
			 */
			'show inline chart': function () {
				window.location.hash = 'graphs/inline-charts';
			},
			/**
			 * Description
			 */
			'show dygraphs': function () {
				window.location.hash = 'graphs/dygraphs';
			},
			/**
			 * Description
			 */
			'show tables': function () {
				window.location.hash = 'tables/table';
			},
			/**
			 * Description
			 */
			'show data table': function () {
				window.location.hash = 'tables/datatable';
			},
			/**
			 * Description
			 */
			'show jquery grid': function () {
				window.location.hash = 'tables/jqgrid';
			},
			/**
			 * Description
			 */
			'show form': function () {
				window.location.hash = 'forms/form-elements';
			},
			/**
			 * Description
			 */
			'show form layouts': function () {
				window.location.hash = 'forms/form-templates';
			},
			/**
			 * Description
			 */
			'show form validation': function () {
				window.location.hash = 'forms/validation';
			},
			/**
			 * Description
			 */
			'show form elements': function () {
				window.location.hash = 'forms/bootstrap-forms';
			},
			/**
			 * Description
			 */
			'show form plugins': function () {
				window.location.hash = 'forms/plugins';
			},
			/**
			 * Description
			 */
			'show form wizards': function () {
				window.location.hash = 'forms/wizards';
			},
			/**
			 * Description
			 */
			'show bootstrap editor': function () {
				window.location.hash = 'forms/other-editors';
			},
			/**
			 * Description
			 */
			'show dropzone': function () {
				window.location.hash = 'forms/dropzone';
			},
			/**
			 * Description
			 */
			'show image cropping': function () {
				window.location.hash = 'forms/image-editor';
			},
			/**
			 * Description
			 */
			'show general elements': function () {
				window.location.hash = 'ui/general-elements';
			},
			/**
			 * Description
			 */
			'show buttons': function () {
				window.location.hash = 'ui/buttons';
			},
			/**
			 * Description
			 */
			'show fontawesome': function () {
				window.location.hash = 'ui/icons/fa';
			},
			/**
			 * Description
			 */
			'show glyph icons': function () {
				window.location.hash = 'ui/icons/glyph';
			},
			/**
			 * Description
			 */
			'show flags': function () {
				window.location.hash = 'ui/icons/flags';
			},
			/**
			 * Description
			 */
			'show grid': function () {
				window.location.hash = 'ui/grid';
			},
			/**
			 * Description
			 */
			'show tree view': function () {
				window.location.hash = 'ui/treeview';
			},
			/**
			 * Description
			 */
			'show nestable lists': function () {
				window.location.hash = 'ui/nestable-list';
			},
			/**
			 * Description
			 */
			'show jquery U I': function () {
				window.location.hash = 'ui/jqui';
			},
			/**
			 * Description
			 */
			'show typography': function () {
				window.location.hash = 'ui/typography';
			},
			/**
			 * Description
			 */
			'show calendar': function () {
				window.location.hash = 'calendar';
			},
			/**
			 * Description
			 */
			'show widgets': function () {
				window.location.hash = 'widgets';
			},
			/**
			 * Description
			 */
			'show gallery': function () {
				window.location.hash = 'gallery';
			},
			/**
			 * Description
			 */
			'show maps': function () {
				window.location.hash = 'gmap-xml';
			},
			/**
			 * Description
			 */
			'go back': function () {
				history.back(1);
			},
			/**
			 * Description
			 */
			'scroll up': function () {
				$('html, body').animate({scrollTop: 0}, 100);
			},
			/**
			 * Description
			 */
			'scroll down': function () {
				$('html, body').animate({scrollTop: $(document).height()}, 100);
			},
			/**
			 * Description
			 */
			'hide navigation': function () {
				if ($(':root').hasClass('container') && !$(':root').hasClass('menu-on-top')) {
					$('span.minifyme').trigger('click');
				} else {
					$('#hide-menu > span > a').trigger('click');
				}
			},
			/**
			 * Description
			 */
			'show navigation': function () {
				if ($(':root').hasClass('container') && !$(':root').hasClass('menu-on-top')) {
					$('span.minifyme').trigger('click');
				} else {
					$('#hide-menu > span > a').trigger('click');
				}
			},
			/**
			 * Description
			 */
			'mute': function () {
				appConfig.sound_on = false;
				$.smallBox({
					title: 'MUTE',
					content: 'All sounds have been muted!',
					color: '#a90329',
					timeout: 4000,
					icon: 'fa fa-volume-off'
				});
			},
			/**
			 * Description
			 */
			'sound on': function () {
				appConfig.sound_on = true;
				$.speechApp.playConfirmation();
				$.smallBox({
					title: 'UNMUTE',
					content: 'All sounds have been turned on!',
					color: '#40ac2b',
					sound_file: 'voice_alert',
					timeout: 5000,
					icon: 'fa fa-volume-up'
				});
			},
			/**
			 * Description
			 */
			'stop': function () {
				smartSpeechRecognition.abort();
				$(':root').removeClass('voice-command-active');
				$.smallBox({
					title: 'VOICE COMMAND OFF',
					content: 'Your voice commands has been successfully turned off. Click on the <i class="fa fa-microphone fa-lg fa-fw"></i> icon to turn it back on.',
					color: '#40ac2b',
					sound_file: 'voice_off',
					timeout: 8000,
					icon: 'fa fa-microphone-slash'
				});
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},
			/**
			 * Description
			 */
			'help': function () {

				$('#voiceModal').removeData('modal').modal({
					remote: 'layout/partials/voice-commands.tpl.html',
					show: true
				});
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}

			},
			/**
			 * Description
			 */
			'got it': function () {
				$('#voiceModal').modal('hide');
			},
			/**
			 * Description
			 */
			'logout': function () {
				$.speechApp.stop();
				window.location = $('#logout > span > a').attr('href');
			}
		};

	}

	return appConfig;
});
