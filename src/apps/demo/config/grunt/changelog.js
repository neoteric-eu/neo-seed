module.exports = function () {
	return {
		default: {
			options: {
				logArguments: [
					'--pretty=* %h - %ad: %s',
					'--no-merges',
					'--date=short'
				],
				after: '<%= pkg.version %>',
				dest: 'dist/release-notes.txt',
				fileHeader: '## Changelog ##',
				template: '{{> features}}',
				featureRegex: /^(.*)$/gim,
				partials: {
					features: '{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
					feature: '- {{this}} {{this.date}}\n'
				}
			}
		}
	}
};
