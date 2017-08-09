module.exports = {
	options: {
		reporter: require("jshint-stylish") // use jshint-stylish to make our errors look and read good
	},
	// when this task is run, lint the Gruntfile, js, json files in _js
	build: [
		"Gruntfile.js",
		"grunt/*.js",
		"build/grunt/*.js",
		"src/client/*.js",
		"src/server/*.js",
		"src/**/data/*.json"
	]
};
