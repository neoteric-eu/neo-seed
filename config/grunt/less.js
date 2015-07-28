module.exports = {
	default: {
		files: {
			'<%= yeoman.app %>/assets/css/vendor/bootstrap/bootstrap.css': '<%= yeoman.app %>/assets/less/custom/bootstrap/bootstrap.less',
			'<%= yeoman.app %>/assets/css/vendor/font-awesome/font-awesome.css': '<%= yeoman.app %>/assets/less/custom/font-awesome/font-awesome.less',

			'<%= yeoman.app %>/assets/css/seed.css': '<%= yeoman.app %>/assets/less/custom/seed.less',
			'<%= yeoman.app %>/assets/css/seed-plugins.css': '<%= yeoman.app %>/assets/less/custom/seed-plugins.less',
			'<%= yeoman.app %>/assets/css/seed-skins.css': '<%= yeoman.app %>/assets/less/custom/seed-skins.less'
		}
	}
};
