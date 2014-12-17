module.exports = {
	dev: {
		options: {
			// compress: true,
			// yuicompress: true,
			// optimization: 2,
		},
		files: {
			'<%= yeoman.app %>/styles/css/bootstrap.css': '<%= yeoman.app %>/styles/less/bootstrap.less',
			'<%= yeoman.app %>/styles/css/smartadmin-production.css': '<%= yeoman.app %>/styles/less/smartadmin-production.less',
			'<%= yeoman.app %>/styles/css/smartadmin-production-plugins.css': '<%= yeoman.app %>/styles/less/smartadmin-production-plugins.less',
			'<%= yeoman.app %>/styles/css/font-awesome.css': '<%= yeoman.app %>/styles/less/library/fontawesome/font-awesome.less',
			'<%= yeoman.app %>/styles/css/smartadmin-skins.css': '<%= yeoman.app %>/styles/less/smartadmin-skin/smartadmin-skins.less'
		}
	}
};
