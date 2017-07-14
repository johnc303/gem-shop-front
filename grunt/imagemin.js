module.exports = {
	build: {
		overwrite: false,
		files: [
			{
				expand: true,
				cwd: "src/",
				src: ["img/**/*.jpg"],
				dest: "tmp/"
			}
		]
	}
};
