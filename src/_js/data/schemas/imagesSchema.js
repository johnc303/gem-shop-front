// Schema for image name arrays
var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var imagesSchema = new Schema(
	{
		gemId: 	{ 
			type: 		Number,
			ref:		'Catalogue', 
			required: 	true,
			unique: 	true
		},
		images:	[String]
	} );
var Images = mongoose.model( 'Images', imagesSchema );
module.exports = Images;
