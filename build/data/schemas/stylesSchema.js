var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var stylesSchema = new Schema({
	link: String
});

module.exports = mongoose.model("Style", stylesSchema);
