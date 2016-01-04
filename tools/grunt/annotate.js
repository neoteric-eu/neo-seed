module.exports = {
	options: {
		singleQuotes: true
	},
	build: {
		files: {'<%= paths.build %>/module.js': '<%= paths.build %>/module.js'}
	}
};
