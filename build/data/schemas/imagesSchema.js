// Schema for image name arrays
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var imagesSchema = new Schema({
	gemId: {
		type: Number,
		ref: "Catalogue",
		required: true,
		unique: true
	},
	imageNames: [String]
});

module.exports = mongoose.model("image", imagesSchema);
