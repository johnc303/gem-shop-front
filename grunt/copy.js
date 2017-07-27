module.exports = {
	build: {
		files: [
			// Copy third-party libraries
			{
				expand: true,
				cwd: "build/third-party/",
				src: "**/*",
				dest: "dist/third-party/"
			}
		]
	}
};
