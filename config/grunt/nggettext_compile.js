module.exports = {
	all: {
		options: {
			requirejs: true,
			modulePath: 'app'
		},
		files: {
			'<%= yeoman.app %>/modules/miniTemplate/locale/translations.js': ['<%= yeoman.app %>/modules/{,**/}*.po']
		}
	}
};
