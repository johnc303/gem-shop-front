var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var contactsSchema = new Schema( 
	{
		emailAddress: String,
		emailSubject: String,
		emailBody: String,
		mailingListConsent: Boolean
	} );
var Contacts = mongoose.model( 'Contacts', contactsSchema );
module.exports = Contacts;