var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );

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
	response.send( request.params.gemId );
} );

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

app.post( '/contact-us.js', function ( request, response ) {
	var emailAddress  = request.params.emailAddress;
	var emailSubject = request.params.emailSubject;
	var emailBody = request.params.emailBody;

	response.send( "POST request to the homepage<p>email add: " + emailAddresponses + "</p><p>email subject: " + emailSubject + "</p><p>email body: " + emailBody + "</p>" );
} );

module.exports = app;