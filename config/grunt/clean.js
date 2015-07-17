// Empties folders to start fresh
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'doc',
				'<%= yeoman.dist %>/*',
				'!<%= yeoman.dist %>/.git*'
			]
		}]
	},
	test: 'test/results',
	doc: 'doc',
	server: '.tmp',
	bower: {
		files: [{
			src: [
				'bower_components',
				'<%= yeoman.app %>/assets/js/vendor/libs'
			]
		}]
	}
};
