module.exports = {
	install: {
		files: [{
			expand: true,
			src: [
				'<%= paths.tmp %>',
				'<%= paths.release %>',
				'<%= paths.test %>',
				'<%= paths.docs %>',
				'<%= paths.assets %>'
			]
		}]
	},
	preDocs: {
		files: [{
			expand: true,
			src: [
				'<%= paths.docs %>'
			]
		}]
	},
	preBuild: {
		files: [{
			expand: true,
			src: [
				'<%= paths.build %>'
			]
		}]
	},
	postBuild: {
		files: [{
			expand: true,
			src: [
				'<%= paths.tmp %>'
			]
		}]
	},
	preRelease: {
		files: [{
			expand: true,
			src: [
				'<%= paths.release %>'
			]
		}]
	}
};
