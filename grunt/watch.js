module.exports = {
	// for stylesheets, watch css files
	// only run cssmin
	stylesheets: {
		files: ["src/client/_css/*.css", "grunt/cssmin.js"],
		tasks: ["cssmin"]
	},

	// for scripts, run jshint and uglify
	scripts: {
		files: [
			"Gruntfile.js",
			"build/grunt/*.js",
			"build/views/helpers/*.js",
			"src/client/**/*.js",
			"src/server/**/*.js",
			".eslintrc.js",
			"grunt/*.js"
		],
		tasks: ["prettier", "jshint", "eslint", "cssmin", "uglify"]
	},

	images: {
		files: "src/img/**/*.{png,jpg,gif}",
		tasks: ["imagemin", "responsive_images"]
	},

	templates: {
		files: [
			"Gruntfile.js",
			"build/views/**/*.{hbs,htm}",
			"src/client/data/*.json",
			"grunt/*.js"
		],
		tasks: ["compile-handlebars"]
	}
};
