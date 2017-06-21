var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var ie8Schema = new Schema( {
	link: String
}, { collection: 'ie8' } );
var ie8 = mongoose.model( 'ie8', ie8Schema );

module.exports = ie8;