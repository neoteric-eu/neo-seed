module.exports = {
	pot: {
		files: {
			'<%= yeoman.app %>/modules/miniTemplate/locale/global-template.pot': '<%= yeoman.app %>/scripts/{,*/}*.js',
			'<%= yeoman.app %>/modules/miniTemplate/locale/template.pot': '<%= yeoman.app %>/modules/miniTemplate/{,**/}*.{html,js}',
			'<%= yeoman.app %>/modules/miniCore/locale/template.pot': '<%= yeoman.app %>/modules/miniCore/{,**/}*.{html,js}'
		}
	}
};
