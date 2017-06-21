module.exports = {
	options: {
		banner: '/*<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
	},
	build: {
		release: {
			files: [
				{
					expand: true,
					cwd: 'src/_js',
					src: '*.js',
					dest: 'dist/_js'
				}
			]
		}
	}
};