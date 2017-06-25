var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var Contacts = require( '../../src/_js/data/schemas/contactsSchema' );
var Images = require( '../../src/_js/data/schemas/imagesSchema' );

var cbContactPost = function( request, response ) {
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
	// console.log( request.body );
	newContact = new Contacts( document );
	newContact.save( function( err2 ) {
		if ( err2 ) {
			throw err2;
		} else {
		response.send( "POST request to the contact page<p>email add: " + document.emailAddress + 
					"</p><p>email subject: " + document.emailSubject + 
					"</p><p>email body: " + document.emailBody + 
					"</p><p>mailing list consent " + document.mailingListConsent +
					"saved" );
		}
	} );
	mongoose.connection.close();
};

var readImages = function ( imageId ) {
	mongoose.connect( 'mongodb://localhost/gem-shop-front' );
	// Images.find( { gemId: imageId }, function( err, data ) {
	// 	console.log( "err: %s, data: %s", err, data );
	// 	if ( err ) {
	// 		throw err;
	// 	} else {
	// 		console.log( data );

	// 		return data;
	// 	}
	// } );
	// mongoose.connection.close();	
};

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( '/gem/:gemId', function( request, response ) {
	// images = fs.readFile( 'tmp/img/images.json', 'utf8', cbReadImages );
	var imgs = readImages( request.params.gemId );

	if ( imgs[request.params.gemId] ) {
		response.send( "Pass: %s", imgs[request.params.gemId] );
	} else {
		response.send( "Fail." );	
	} 
	console.log( "imgs[request.params.gemId]: ",  imgs[request.params.gemId] );
} );

app.post( '/contact-us.js', cbContactPost );

module.exports = app;