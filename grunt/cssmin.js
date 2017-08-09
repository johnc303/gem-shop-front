module.exports = {
	options: {
		banner: '/*<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
	},
	build: {
		files: {
			"dist/_css/global.min.css": [
				// _bootstrapTheme,
				"src/client/_css/global.css",
				"src/client/third-party/bootstrap/bootstrap_cyborg_theme.css"
			]
		}
	}
};
