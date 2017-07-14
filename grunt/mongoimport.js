module.exports = {
	options: {
		db: "gem-shop-front",
		host: "localhost", //	optional
		port: "27017", //	optional
		// username : 'username', 	//	optional
		// password : 'password', 	//	optional
		stopOnError: true, //	optional
		collections: [
			{
				name: "catalogue",
				type: "json",
				file: "src/_js/data/CATALOGUE.json",
				drop: true,
				jsonArray: true
				// upsert : true, 		//	optional
			},
			{
				name: "ie8",
				type: "json",
				file: "src/_js/data/IE8.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "nav",
				type: "json",
				file: "src/_js/data/NAV.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "styles",
				type: "json",
				file: "src/_js/data/STYLES.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "themes",
				type: "json",
				file: "src/_js/data/THEMES.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "images",
				type: "json",
				file: "tmp/img/images.json",
				drop: true,
				jsonArray: true
				// upsert : true
			}
		]
	}
};
