module.exports = {
	build: {
		src: [
			'<%= paths.seed %>/**/*.js',
			'README.md'
		],
		options: {
			destination: 'docs',
			template: 'node_modules/neo-docstrap/template',
			configure: 'tools/jsdocs/jsdoc.conf.json'
		}
	}
};
