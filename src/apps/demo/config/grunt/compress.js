module.exports = function () {
	'use strict';

	return {
		default: {
			options: {
				archive: 'build/release-<%= pkg.version %>.zip',
				mode: 'zip'
			},
			files: [{
				expand: true,
				src: ['dist/**/*']
			}]
		}
	};
};
