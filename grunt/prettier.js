module.exports = {
	build: {
		options: {
			useTabs: true,
			tabWidth: 4
		},
		src: ["Gruntfile.js", "grunt/*.js", "build/**/*.js", "src/client/*.js", "src/server/*.js"]
	}
};
