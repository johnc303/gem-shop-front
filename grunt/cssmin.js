module.exports = {
	options: {
		banner: '/*<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
		},
		build: {
		files: {
			'dist/_css/global.min.css': [ 
				// _bootstrapTheme,
				'src/_css/global.css' 
			]
		}
	}
};