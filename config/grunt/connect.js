// The actual grunt server settings

var modRewrite = require('connect-modrewrite');

module.exports = {
	server: {
		options: {
			hostname: 'localhost',
			port: 9000,
			base: '<%= yeoman.app %>',
			open: true,
			livereload: true,
			middleware: function (connect, options) {
				var middlewares = [];

				middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));

				if (!Array.isArray(options.base)) {
					options.base = [options.base];
				}

				var directory = options.directory || options.base[options.base.length - 1];
				options.base.forEach(function (base) {
					// Serve static files.
					middlewares.push(connect.static(base));
				});

				// Make directory browse-able.
				middlewares.push(connect.directory(directory));

				return middlewares;
			}
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
