/**
 * Created by default on 17.12.14.
 */
module.exports = function (grunt) {
	return {
		development: {
			options: {
				patterns: [{
					json: grunt.file.readJSON('./config/environments/development.json')
				}]
			},
			files: [{
				expand: true,
				flatten: true,
				src: ['./config/global_settings.js'],
				dest: '<%= yeoman.app %>/app/modules/'
			}]
		},
		staging: {
			options: {
				patterns: [{
					json: grunt.file.readJSON('./config/environments/staging.json')
				}]
			},
			files: [{
				expand: true,
				flatten: true,
				src: ['./config/global_settings.js'],
				dest: '<%= yeoman.app %>/app/modules/'
			}]
		},
		production: {
			options: {
				patterns: [{
					json: grunt.file.readJSON('./config/environments/production.json')
				}]
			},
			files: [{
				expand: true,
				flatten: true,
				src: ['./config/global_settings.js'],
				dest: '<%= yeoman.app %>/app/modules/'
			}]
		}
	}
};
