module.exports = function () {
	'use strict';

	return {
		build: {
			files: [
				{
					expand: true,
					dot: true,
					cwd: '<%= paths.assets %>/seed',
					dest: '<%= paths.build %>/__misc/_assets',
					src: [
						'**'
					]
				},
				{
					'<%= paths.build %>/require.conf.js': '<%= paths.seed %>/require.conf.js'
				}
			]
		}
	};
};
