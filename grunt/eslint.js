module.exports = {
	// automatically takes its ruleset etc from .eslintrc.js
	options: {
		outputFile:
			'tmp/eslint-<%= grunt.template.today("yyyymm") %>/eslintRun-<%= grunt.template.today("yyyy-mm-dd") %>.log'
	},
	build: {
		src: [
			"Gruntfile.js",
			"grunt/*.js",
			"src/_js/*.js",
			"src/_js/data/*.json"
		]
	}
};
