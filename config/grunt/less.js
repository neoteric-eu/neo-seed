module.exports = {
	dev: {
		options: {
			// compress: true,
			// yuicompress: true,
			// optimization: 2,
		},
		files: {
			'<%= yeoman.app %>/styles/css/vendor/bootstrap/bootstrap.css': '<%= yeoman.app %>/styles/less/custom/bootstrap.less',
			'<%= yeoman.app %>/styles/css/smartadmin-production.css': '<%= yeoman.app %>/styles/less/smartadmin-production.less',
			'<%= yeoman.app %>/styles/css/smartadmin-production-plugins.css': '<%= yeoman.app %>/styles/less/smartadmin-production-plugins.less',
			'<%= yeoman.app %>/styles/css/smartadmin-skins.css': '<%= yeoman.app %>/styles/less/smartadmin-skins.less',
			'<%= yeoman.app %>/styles/css/vendor/font-awesome/font-awesome.css': '<%= yeoman.app %>/styles/less/custom/font-awesome.less'
		}
	}
};
