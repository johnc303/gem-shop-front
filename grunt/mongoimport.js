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
				file: "build/data/CATALOGUE.json",
				drop: true,
				jsonArray: true
				// upsert : true, 		//	optional
			},
			{
				name: "ie8",
				type: "json",
				file: "build/data/IE8.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "nav",
				type: "json",
				file: "build/data/NAV.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "styles",
				type: "json",
				file: "build/data/STYLES.json",
				drop: true,
				jsonArray: true
			},
			{
				name: "themes",
				type: "json",
				file: "build/data/THEMES.json",
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
