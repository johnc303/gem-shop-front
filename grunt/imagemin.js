module.exports = {
	build: {
		overwrite: false,
		files: [
			{
				expand: true,
				cwd: "build/",
				src: ["img/**/*.jpg"],
				dest: "tmp/"
			}
		]
	}
};
