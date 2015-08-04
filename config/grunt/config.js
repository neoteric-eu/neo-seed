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
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/_development.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json'),
					skinSettings: grunt.file.readJSON('src/config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('src/config/settings/sound.json'),
					sentrySettings: {}
				}
			}
		},
		staging: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/_staging.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json'),
					skinSettings: grunt.file.readJSON('src/config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('src/config/settings/sound.json'),
					sentrySettings: {}
				}
			}
		},
		production: {
			constants: {
				appConf: {
					appsSettings: grunt.file.readJSON('src/config/settings/apps.json'),
					environmentSettings: grunt.file.readJSON('src/config/environments/_production.json'),
					generalSettings: grunt.file.readJSON('src/config/settings/general.json'),
					languageSettings: grunt.file.readJSON('src/config/settings/language.json'),
					skinSettings: grunt.file.readJSON('src/config/settings/skin.json'),
					soundSettings: grunt.file.readJSON('src/config/settings/sound.json'),
					sentrySettings: grunt.file.readJSON('src/config/settings/sentry.json')
				}
			}
		}
	};
};
