var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var catalogueSchema = new Schema(
	{
		gemId: Number,
		gemType: String,
		carats: Number,
		cut: String,
		color: String,
		approxDimensions: String
	},
	{ collection: "catalogue" }
);
var Catalogue = mongoose.model("Catalogue", catalogueSchema);

module.exports = Catalogue;
