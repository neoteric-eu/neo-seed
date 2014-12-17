/**
 * Created by default on 17.12.14.
 */

module.exports = {
	server: {
		url: 'http://localhost:<%= connect.serve.options.port %>'
	},
	coverage: {
		url: 'http://localhost:<%= connect.coverage.options.port %>'
	}
};
