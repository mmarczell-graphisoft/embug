const path = require('path');

module.exports = function(env, argv) {
	return {
		mode: 'production',
		resolve: {
			extensions: ['.js'],
			fallback: {
				assert: require.resolve('assert')
			}
		},
		output: {
			filename: path.basename(argv.entry[0], '.js') + '.bundle.js',
			path: path.resolve('Build/webpack')
		}
	}
}