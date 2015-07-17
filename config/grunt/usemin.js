// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
	html: ['<%= yeoman.dist %>/index.html'],
	js: ['<%= yeoman.dist %>/apps/*.js'],
	css: ['<%= yeoman.dist %>/assets/css/*.css'],
	options: {
		assetsDirs: ['<%= yeoman.dist %>/apps', '<%= yeoman.dist %>/assets/css/']
	}
};
