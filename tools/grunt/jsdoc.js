module.exports = {
	build: {
		src: [
			'<%= paths.seed %>/**/*.js'
		],
		options: {
			destination: 'docs',
			template: 'node_modules/ink-docstrap/template',
			configure: 'tools/jsdocs/jsdoc.conf.json'
		}
	}
};
