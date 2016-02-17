module.exports = {
	/*
	 * ========================================
	 * --------- INSTALLATION TASKS -----------
	 * ========================================
	 */

	// Internally used by Grunt for installation,
	// Run along with npm install
	// Set up application repositories
	preInstall: [
		'clean:install'
	],

	// Internally used by Grunt for installation,
	// Run along with npm install
	install: [
		'bowercopy'
	],

	// Internally used by Grunt for installation,
	// Run along with npm install
	// Compile assets & prepare environment
	postInstall: [
		'symlink',
		'gettext-compile',
		'templates-cache-clean'
	],

	/*
	 * ========================================
	 * ------------ TESTING TASKS -------------
	 * ========================================
	 */

	// Executes complete app unit testing with coverage
	'test': [
		'jshint',
		'karma:unit'
	],

	/*
	 * ========================================
	 * ------------- BUILD TASKS --------------
	 * ========================================
	 */

	// Creates local version of development code
	'build': [
		'jshint',
		'clean:preBuild',
		'gettext-compile',
		'templates-cache',
		'copy:build',
		'requirejs',
		'clean:postBuild'
	],

	/*
	 * ========================================
	 * --------- DOCUMENTATION TASKS ----------
	 * ========================================
	 */

	// Generates JSDoc documentation
	'docs': [
		'clean:preDocs',
		'jsdoc'
	]
};

