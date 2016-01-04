module.exports = function () {
	'use strict';

	return {
		seed: {
			files: [{
				dest: '<%= paths.seed %>/__misc/_locale/template.pot',
				src: [
					'<%= paths.seed %>/**/*@(.html|.js)'
				]
			}]
		}
	};
};
