module.exports = {
	options: {
		singleQuotes: true
	},
	build: {
		files: {'<%= paths.build %>/neo-seed.js': '<%= paths.build %>/neo-seed.js'}
	}
};
