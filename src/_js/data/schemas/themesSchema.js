var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var themesSchema = new Schema({
	name: String,
	file: String
});
var Theme = mongoose.model("Themes", themesSchema);

module.exports = Theme;
