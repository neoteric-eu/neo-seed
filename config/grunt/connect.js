// The actual grunt server settings
module.exports = {
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
};
