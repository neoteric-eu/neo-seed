// The actual grunt server settings
module.exports = {
	server: {
		options: {
			hostname: 'localhost',
			port: 9000,
			base: '<%= yeoman.app %>',
			open: true,
			livereload: true
		}
	},
	test: {
		options: {
			hostname: 'localhost',
			port: 9010,
			base: '<%= yeoman.app %>'
		}
	},
	coverage: {
		options: {
			hostname: 'localhost',
			port: 9020,
			base: '<%= yeoman.coverage %>',
			open: true,
			keepalive: true
		}
	}
};
