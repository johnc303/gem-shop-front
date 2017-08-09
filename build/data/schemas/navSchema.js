var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var navSchema = new Schema(
	{
		link: String,
		name: String
	},
	{ collection: "nav" }
);
var Nav = mongoose.model("NAV", navSchema);

module.exports = Nav;
