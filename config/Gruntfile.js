// Generated on 2014-03-04 using generator-angular-require 0.1.11
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-githooks');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-angular-templates');

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	// require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				ignores: [
					'<%= yeoman.app %>/scripts/*.js',
				],
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js',
				'<%= yeoman.app %>/modules/{,**/}*.js'
			],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/spec/{,*/}*.js']
			}
		},

		open: {
			server: {
				url: 'http://localhost:<%= connect.serve.options.port %>'
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
					compress: true,
					yuicompress: true,
					optimization: 2,
				},
				files: {
					'<%= yeoman.app %>/styles/css/bootstrap-custom.css': '<%= yeoman.app %>/styles/less/bootstrap.less',
					'<%= yeoman.app %>/styles/css/smartadmin-production.css': '<%= yeoman.app %>/styles/less/smartadmin-production.less'
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
						// '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						// '<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},

		requirejs: {
			dist: {

                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: '<%= yeoman.app %>/scripts',
                    optimize: 'uglify2',
					paths: {
						'jquery': 'empty:',
						'templates': '../../templates'
					},
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
					// generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    name: 'main',
                    out: '<%= yeoman.dist %>/scripts/main.js',
                    mainConfigFile: '<%= yeoman.app %>/scripts/main.js',
					findNestedDependencies: true,
					uglify2: {
						// output: {
							// beautify: true,
						// },
						// beautify: {
							// semicolons: false
						// },
						mangle: false
					},
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates yeomanurations in memory so
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
			css: ['<%= yeoman.dist %>/styles/css/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
			}
		},

		// Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: 'modules/**/*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		uglify: {
			dist: {
				files: {
					'<%= yeoman.dist %>/scripts/main.js': [
						'<%= yeoman.dist %>/scripts/main.js'
					]
				}
			},
			requirejs: {
				files: {
					'<%= yeoman.dist %>/js/libs/bower/requirejs/require.js': [
						'<%= yeoman.dist %>/js/libs/bower/requirejs/require.js'
					]
				}
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
						'index.html',
						//'bower_components/**/*',
						'images/**/*',
						'styles/fonts/*',
						'downloads/*',
						// 'styles/css/*',
						'plugins/template_smart-admin/fonts/*'
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
				cwd: '.tmp/concat/styles/css',
				dest: '<%= yeoman.dist %>/styles/css',
				src: '{,*/}*.min.css',
			},
			requirejs: {
				src: '<%= yeoman.app %>/bower_components/requirejs/require.js',
				dest: '<%= yeoman.dist %>/bower_components/requirejs/require.js'
			}
		},

		// Test settings
		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				browsers: ['PhantomJS'],
				autoWatch: true,
			},
			preCommit: {
				configFile: 'test/karma.conf.js',
				browsers: ['PhantomJS'],
				autoWatch: false,
				singleRun: true
			},
			coverage: {
				configFile: 'test/karma.conf.js',
				browsers: ['PhantomJS'],
				plugins:[
					'karma-jasmine',
					'karma-requirejs',
					'karma-coverage',
					'karma-phantomjs-launcher'
				],

				preprocessors: {
					// 'app/modules/**/*.js': 'coverage',
					'app/modules/**/**/*.js': 'coverage',
				},

				// with coverage, but with bad line numbers in tests reports
				reporters: ['progress', 'dots', 'coverage'],

				// without coverage
				// reporters: ['progress', 'dots'],

				coverageReporter: {
					type : 'html',
					dir : 'coverage/'
				},
				singleRun: false,
				autoWatch: true
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
					src: ['./config/global_settings.js'],
					dest: '<%= yeoman.app %>/modules/'
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
					dest: '<%= yeoman.app %>/modules/'
				}]
			}
		},
		nggettext_extract: {
			pot: {
				files: {
					'po/preiscoin.pot': [
						'./app/modules/preiscoin/**/*.*',
						'./app/modules/graphs/**/*.*',
						'./app/modules/templateCore/services/menu.js',
						'./app/modules/templateCore/directives/neoTable/filters/date.js'
					]
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
					'./app/modules/preiscoin/locale/translations.js': ['po/preiscoin-*.po']
				}
			}
		},
		ngtemplates: {
			dist: {
				files: [{
					src: 'modules/**/*.html',
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.app %>/templates.js'
				}],
				options: {
					prefix: './',
					source: function(code) {
						code = String(code).replace(/\t+/g,'');
						code = String(code).replace(/\n+/g,'');
						code = String(code).replace(/\r+/g,'');
						return code;
					},
					bootstrap:  function(module, script) {
						return 'define(["angular", "globalSettings"], function(angular,globalSettings) {' +
							'"use strict";' +
							'var templates = angular.module("prsTemplates", []);' +
							'if(globalSettings.get("DEBUG")) return;' +
							'templates.run(function($templateCache) {' +
							script +
							'});' +
							'return templates;' +
						'});';
					},
					htmlmin: {
						removeCommentsFromCDATA: true,
						// watch out for comment directives!
						removeComments: true,

						// https://github.com/yeoman/grunt-usemin/issues/44
						collapseWhitespace: true,
						collapseBooleanAttributes: true,
						removeAttributeQuotes: true,
						removeRedundantAttributes: true,
						useShortDoctype: true,
						removeEmptyAttributes: true,
						removeOptionalTags: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes:  true
					},
				},
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
			'ngtemplates:dist',
			'connect:serve',
			// 'replace:development',
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
		'connect:test',
		'karma:unit'
	]);
	grunt.registerTask('coverage', [
		'clean:server',
		'connect:test',
		'karma:coverage'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'bower-install',
		'less:dev',
		'nggettext_compile',
		'useminPrepare',
		// 'ngmin',
		'ngtemplates:dist',
		'requirejs:dist',
		'concat',
		'cssmin',
		// 'uglify:dist',
		'copy:requirejs',
		'copy:dist',
		// 'uglify:requirejs',
		// 'uglify:generated',
		// Below task commented out as r.js (via grunt-contrib-requirejs) will take care of this
		//'uglify',
		'rev',
		'usemin',
		// 'copy:dist',
	]);

	grunt.registerTask('development', [
		'replace:development'
		// Add further deploy related tasks here
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
