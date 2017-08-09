module.exports = {
	build: {
		files: [
			// Copy third-party libraries
			{
				expand: true,
				cwd: "src/client/third-party/",
				src: "**/*",
				dest: "dist/third-party/"
			}
		]
	}
};
