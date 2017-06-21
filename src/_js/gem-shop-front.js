var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var when = 0;
var mongoose = require( 'mongoose' );
var Contacts = require( '../../src/_js/data/schemas/contactsSchema' );

var contactPost = function( request, response ) {
	var document = { 
		'emailAddress': request.body.emailAddress,
		'emailSubject': request.body.emailSubject,
		'emailBody': request.body.emailBody,
		'mailingListConsent': false
	};
	var newContact = {};

	mongoose.connect( 'mongodb://localhost/gem-shop-front' );

	if ( request.body.mailingListConsent ) {
		document.mailingListConsent = true;
	}
	console.log( request.body );
	newContact = new Contacts( document );
	newContact.save( function( err2 ) {
		if ( err2 ) {
			throw err2;
		} else {
		response.send( "POST request to the contact page<p>email add: " + document.emailAddress + 
					"</p><p>email subject: " + document.emailSubject + 
					"</p><p>email body: " + document.emailBody + 
					"</p><p>mailing list consent " + document.mailingListConsent );
		}
	} );
	mongoose.connection.close();
};
		

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

/*	
app.get( '/', function ( request, response ) {
	
	response.send( 'GET request to the homepage' );
} );

// POST method route
app.post( '/', function ( request, response ) {
	response.send( 'POST request to the homepage' );
} );
*/ 

app.get( '/gem/:gemId', function ( request, response ) {
	when = new Date();

	response.send( request.params.gemId );
	console.log( "%s gemId: %s", when.toUTCString(), request.params.gemId );
} );

app.post( '/contact-us.js', contactPost );

module.exports = app;