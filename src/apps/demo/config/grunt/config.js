module.exports = function (grunt) {
	'use strict';

	return {
		options: {
			name: 'app.conf',
			dest: '<%= yeoman.app %>/apps/module.conf.js',
			wrap: 'define([\'angular\'], function() { \n\n \'use strict\'\;\n return {%= __ngModule %} \n\n});'
		},
		development: {
			constants: {
				appConf: {
					environmentSettings: grunt.file.readJSON('./config/environments/_development.json'),
					generalSettings: grunt.file.readJSON('./config/settings/general.json'),
					languageSettings: grunt.file.readJSON('./config/settings/language.json'),
					skinSettings: grunt.file.readJSON('./config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('./config/settings/sound.json'),
					sentrySettings: {}
				}
			}
		},
		staging: {
			constants: {
				appConf: {
					environmentSettings: grunt.file.readJSON('./config/environments/_staging.json'),
					generalSettings: grunt.file.readJSON('./config/settings/general.json'),
					languageSettings: grunt.file.readJSON('./config/settings/language.json'),
					skinSettings: grunt.file.readJSON('./config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('./config/settings/sound.json'),
					sentrySettings: {}
				}
			}
		},
		production: {
			constants: {
				appConf: {
					environmentSettings: grunt.file.readJSON('./config/environments/_production.json'),
					generalSettings: grunt.file.readJSON('./config/settings/general.json'),
					languageSettings: grunt.file.readJSON('./config/settings/language.json'),
					skinSettings: grunt.file.readJSON('./config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('./config/settings/sound.json'),
					sentrySettings: grunt.file.readJSON('./config/settings/sentry.json')
				}
			}
		}
	};
};
