module.exports = {
	// for stylesheets, watch css files 
	// only run cssmin 
	stylesheets: {
		files: [ 'src/_css/*.css' ], 
		tasks: [ 'cssmin' ] 
	},

	// for scripts, run jshint and uglify 
	scripts: { 
		files: [ 'Gruntfile.js', 'src/grunt/*.js', 'src/_js/**/*.js', 'templates/helpers/*.js', '.eslintrc.js' ],
		tasks: [ 'jshint', 'eslint', 'cssmin', 'uglify' ]
	},

	images: {
		files: 'src/img/**/*.{png,jpg,gif}',
		tasks: [ 'responsive_images', 'imagemin' ]
	},

	templates: { 
		files: [ 
			'Gruntfile.js',
			'src/templates/**/*.{hbs,htm}',
			'src/_js/data/*.json',
			'grunt/*.js'
		],
		tasks: [ 'eslint', 'compile-handlebars' ]
	}
};