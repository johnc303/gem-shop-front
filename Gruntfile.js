// Gruntfile.js

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json")
	});

	require("load-grunt-config")(grunt);

	grunt.loadTasks("build/grunt/parseTree");
	grunt.loadNpmTasks("gruntify-eslint");
	grunt.loadNpmTasks("grunt-prettier");
};
