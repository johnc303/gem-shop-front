module.exports = {
	build: {
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
