module.exports = {
	all: {
		options: {
			requirejs: true,
			modulePath: 'app'
		},
		files: {
			'<%= yeoman.app %>/app/modules/miniTemplate/locale/translations.js': ['<%= yeoman.app %>/app/modules/{,**/}*.po']
		}
	}
};
