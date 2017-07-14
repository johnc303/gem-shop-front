var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Contacts = require("../../src/_js/data/schemas/contactsSchema");
var Images = require("../../src/_js/data/schemas/imagesSchema");
var hbs = require("hbs");
var helmet = require("helmet");

var cbContactPost = function(request, response) {
	var document = {
		emailAddress: request.body.emailAddress,
		emailSubject: request.body.emailSubject,
		emailBody: request.body.emailBody,
		mailingListConsent: false
	};
	var newContact = {};

	mongoose.connect("mongodb://localhost/gem-shop-front");

	if (request.body.mailingListConsent) {
		document.mailingListConsent = true;
	}
	// console.log( request.body );
	newContact = new Contacts(document);
	newContact.save(function(err2) {
		if (err2) {
			throw err2;
		} else {
			response
				.status(201)
				.send(
					"POST request to the contact page<p>email add: " +
						document.emailAddress +
						"</p><p>email subject: " +
						document.emailSubject +
						"</p><p>email body: " +
						document.emailBody +
						"</p><p>mailing list consent " +
						document.mailingListConsent +
						" saved"
				);
		}
	});
	mongoose.connection.close();
};

var cbGemGet = function(request, response) {
	mongoose.connect("mongodb://localhost/gem-shop-front", {
		useMongoClient: true
	});
	Images.findOne({ gemId: request.params.gemId }, function(err, data) {
		if (err) {
			mongoose.connection.close();
			throw err;
		}
		if (data !== null) {
			console.log("data.imageNames: " + data.imageNames);
			response
				.status(200)
				.render("gem.hbs", { IMAGENAMES: data.imageNames });
		} else {
			response.status(404).send("Fail.");
		}
		mongoose.connection.close();
	});
};

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.localsAsTemplateData(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/gem/:gemId", cbGemGet);

app.post("/contact-us.js", cbContactPost);

module.exports = app;
