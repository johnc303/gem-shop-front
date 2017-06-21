var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var stylesSchema = new Schema( {
	link: String
} );
var Style = mongoose.model( 'Style', stylesSchema );

module.exports = Style;