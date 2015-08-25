define([
	// Templates
	'./__misc/_templates/module',
	// Translation
	'./__misc/_locale/translation',

	// Core app generics
	'./helpers/_includes',

	// Core apps components
	'./components/module',
	'./components/_includes',

	// Layout
	'./layout/module',
	'./layout/_includes',

	// Authentication
	'./auth/module',
	'./auth/_includes',

	// Forms
	'./forms/_includes',
	'./forms/module',

	// Tables
	'./tables/_includes',
	'./tables/module',

	// Graphs
	'./graphs/module',
	'./graphs/includes',

	// Widgets
	'./widgets/module',
	'./widgets/includes'
], function () {
	'use strict';
});
