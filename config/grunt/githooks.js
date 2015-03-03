module.exports = {
	all: {
		'pre-commit': 'jshint:app',
		'post-pull': 'bower'
	}
};
