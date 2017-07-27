module.exports = {
	build: {
		options: {
			server: "src/server/gem-shop-front.js",
			hostname: "*",
			port: 3000,
			bases: ["dist"],
			serverreload: true
		}
	}
};
