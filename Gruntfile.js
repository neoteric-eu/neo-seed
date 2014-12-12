// Generated on 2014-03-04 using generator-angular-require 0.1.11
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-replace');

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	// require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	//noinspection JSUnresolvedFunction,JSUnresolvedVariable
	grunt.initConfig({

		// Command line actions configuration
		shell: {
			// Command line conf
			options: {
				stdout: true
			},
			// Selenium runner
			selenium: {
				command: './selenium/start',
				options: {
					stdout: false,
					async: true
				}
			},
			// Protractor update
			webdriver_update: {
				command: 'node ./node_modules/protractor/bin/webdriver-manager update',
				options: {
					stdout: false,
					async: true
				}
			}
		},

		// Project settings
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'app',
			dist: 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js', '<%= yeoman.app %>/modules/{,**/}*.js'],
				tasks: ['newer:jshint:all']
				// options: {
				// 	livereload: true
				// }
			},
			jsTest: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js', '<%= yeoman.app %>/modules/{,**/}*.js'],
				tasks: ['newer:jshint:test']
			},
			styles: {
				files: '<%= yeoman.app %>/{,**/}*.less',
				tasks: 'less:dev'
			},
			gruntfile: {
				files: ['Gruntfile.js']
			}
			// livereload: {
			// 	options: {
			// 		livereload: '<%= connect.options.livereload %>'
			// 	},
			// 	files: [
			// 		'<%= yeoman.app %>/{,*/}*.html',
			// 		'.tmp/styles/{,*/}*.css',
			// 		'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			// 	]
			// }
		},

		// The actual grunt server settings
		connect: {
			// livereload: {
			// 	options: {
			// 		open: true,
			// 		base: [
			// 			'.tmp',
			// 			'<%= yeoman.app %>'
			// 		]
			// 	}
			// },
			serve: {
				options: {
					port: 9000,
					hostname: '0.0.0.0',
					base: [
						'<%= yeoman.app %>'
					]
				}
			},
			test: {
				options: {
					port: 9010,
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			coverage: {
				options: {
					base: 'coverage/',
					port: 9020,
					keepalive: true
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				ignores: [
					'app/api/**/*.js',
					'app/auth/**/*.js',
					'app/bower_components/**/*.js',
					'app/components/**/*.js',
					'app/dashboard/**/*.js',
					'app/layout/**/*.js',
					'app/modules/app-views/**/*.js',
					'app/modules/forms/**/*.js',
					'app/modules/graphs/**/*.js',
					'app/modules/maps/**/*.js',
					'app/modules/miniTemplate/locale/**/*.js',
					'app/modules/misc/**/*.js',
					'app/modules/smart-admin/**/*.js',
					'app/modules/tables/**/*.js',
					'app/modules/ui/**/*.js',
					'app/modules/widgets/**/*.js',
					'app/plugins/**/*.js',
					'dist/**/*.js',
					'node_modules/**/*.js'
				],
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/**/*.js'
			],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},

		open: {
			server: {
				url: 'http://localhost:<%= connect.serve.options.port %>'
			},
			coverage: {
				url: 'http://localhost:<%= connect.coverage.options.port %>'
			}
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		// Automatically inject Bower components into the app
		'bower-install': {
			app: {
				html: '<%= yeoman.app %>/index.html',
				ignorePath: '<%= yeoman.app %>/'
			}
		},

		less: {
			dev: {
				options: {
					// compress: true,
					// yuicompress: true,
					// optimization: 2,
				},
				files: {
					'<%= yeoman.app %>/styles/css/bootstrap.css': '<%= yeoman.app %>/styles/less/bootstrap.less',
					'<%= yeoman.app %>/styles/css/smartadmin-production.css': '<%= yeoman.app %>/styles/less/smartadmin-production.less',
					'<%= yeoman.app %>/styles/css/smartadmin-production-plugins.css': '<%= yeoman.app %>/styles/less/smartadmin-production-plugins.less',
					'<%= yeoman.app %>/styles/css/font-awesome.css': '<%= yeoman.app %>/styles/less/library/fontawesome/font-awesome.less',
					'<%= yeoman.app %>/styles/css/smartadmin-skins.css': '<%= yeoman.app %>/styles/less/smartadmin-skin/smartadmin-skins.less'
				}
			}
		},

		// Renames files for browser caching purposes
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>']
			}
		},

		protractor: {
			options: {
				configFile: './test/protractor.conf.js',
				keepAlive: false,
				noColor: true
			},
			singlerun: {}
		},

		// Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'views/{,*/}*.html',
						'bower_components/**/*',
						'images/{,*/}*.{webp}',
						'fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},

		concat: {
			dist: {}
		},

		// Test settings
		karma: {
			unit: {
				configFile: 'test/karma.conf.js'
			},
			coverage: {
				configFile: 'test/karma.conf.js',
				plugins: [
					'karma-jasmine',
					'karma-requirejs',
					'karma-coverage',
					'karma-phantomjs-launcher'
				],

				preprocessors: {
					'app/modules/**/*.js': 'coverage'
				},

				reporters: ['coverage'],

				coverageReporter: {
					type: 'html',
					dir: 'coverage/',
					subdir: '.'
				},
				singleRun: true,
				autoWatch: false
			},
			preCommit: {
				configFile: 'test/karma.conf.js'

			}
		},

		githooks: {
			all: {
				// !important run 'grunt githooks' after updates.
				'pre-commit': 'karma:preCommit jshint:all'
			}
		},

		replace: {
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
					dest: '<%= yeoman.app %>/modules/'
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
					src: ['./config/config.js'],
					dest: '<%= yeoman.app %>/scripts/services/'
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
					src: ['./config/config.js'],
					dest: '<%= yeoman.app %>/scripts/services/'
				}]
			}
		},

		nggettext_extract: {
			pot: {
				files: {
					'<%= yeoman.app %>/modules/miniTemplate/locale/global-template.pot': '<%= yeoman.app %>/scripts/{,*/}*.js',
					'<%= yeoman.app %>/modules/miniTemplate/locale/template.pot': '<%= yeoman.app %>/modules/miniTemplate/{,**/}*.{html,js}',
					'<%= yeoman.app %>/modules/miniCore/locale/template.pot': '<%= yeoman.app %>/modules/miniCore/{,**/}*.{html,js}'
				}
			}
		},

		nggettext_compile: {
			all: {
				options: {
					requirejs: true,
					modulePath: 'app'
				},
				files: {
					'<%= yeoman.app %>/modules/miniTemplate/locale/translations.js': ['<%= yeoman.app %>/modules/{,**/}*.po']
				}
			}
		}

	});

	grunt.registerTask('serve', function (target) {

		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'bower-install',
			'connect:serve',
			'replace:development',
			// 'open',
			'watch'
		]);
	});

	grunt.registerTask('server', function (target) {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'jshint',
		'connect:test',
		'test:e2e',
		'test:unit'
	]);

	grunt.registerTask('test:unit', [
		'karma:unit'
	]);

	grunt.registerTask('test:e2e', [
		'connect:serve',
		'shell:webdriver_update',
		'protractor:singlerun'
	]);

	grunt.registerTask('coverage', [
		'karma:coverage',
		'open:coverage',
		'connect:coverage'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'bower-install',
		'useminPrepare',
		'less:dev',
		'concat',
		'ngAnnotate',
		'nggettext_compile',
		// Below task commented out as r.js (via grunt-contrib-requirejs) will take care of this
		//'uglify',
		'rev',
		'usemin',
		'copy:dist'
	]);

	grunt.registerTask('staging', [
		'replace:staging'
		// Add further deploy related tasks here
	]);

	grunt.registerTask('production', [
		'replace:production'
		// Add further deploy related tasks here
	]);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
