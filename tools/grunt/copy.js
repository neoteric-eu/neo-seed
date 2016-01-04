module.exports = function () {
	'use strict';

	return {
		build: {
			files: [
				{
					expand: true,
					dot: true,
					cwd: '<%= paths.assets %>/seed',
					dest: '<%= paths.build %>/assets',
					src: [
						'**'
					]
				},
				{
					'<%= paths.build %>/bower.json': '<%= paths.seed %>/bower.json',
					'<%= paths.build %>/require.conf.js': '<%= paths.seed %>/require.conf.js'

				}
			]
		}
	};
};
