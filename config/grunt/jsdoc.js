module.exports = {
	dist: {
		src: ['src/apps/**/*.js'],
		options: {
			destination: 'docs',
			template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
			configure: 'config/jsdocs/jsdoc.conf.json'
		}
	}
};
