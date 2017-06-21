module.exports = {
	build: {
		overwrite: false,
		files: [
			{
				expand: true,
				cwd: 'tmp/',
				src: ['img/**/*.jpg'],
				dest: 'dist/'
			}
		]
	}
};