module.exports = {
	build: {
		files: [
				// Copy third-party libraries
				{
					expand: true,
					cwd: 'src/third-party/',
					src: '**/*',
					dest: 'dist/third-party/'
				}
		]
	}
};