var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var dataBase = "mongodb://localhost/gem-shop-front";
var db = {};
var Contacts = require("../../build/data/schemas/contactsSchema");
var Images = require("../../build/data/schemas/imagesSchema");
var hbs = require("hbs");
var helmet = require("helmet");
var fs = require("fs");
var path = require("path");
var partialsDir = {};
var templateData = JSON.parse(
	fs.readFileSync("build/data/templateData.json", "utf8")
);

var cbContactPost = function(req, res) {
	var document = {
		emailAddress: req.body.emailAddress,
		emailSubject: req.body.emailSubject,
		emailBody: req.body.emailBody,
		mailingListConsent: false
	};
	var newContact = {};

	mongoose.connect(dataBase);

	if (req.body.mailingListConsent) {
		document.mailingListConsent = true;
	}
	newContact = new Contacts(document);
	newContact.save(function(err2) {
		if (err2) {
			throw err2;
		} else {
			res
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

var cbGemGet = function(req, res) {
	if (Number.isInteger(Number.parseInt(req.params.gemId, 10))) {
		mongoose.connect("mongodb://localhost/gem-shop-front", {
			useMongoClient: true
		});
		db = mongoose.connection;

		db.on("error", function(err) {
			console.log("connection error: %s", err);
		});
		db.once("open", function() {
			Images.findOne({ gemId: req.params.gemId }, function(err, gemData) {
				if (err) {
					throw err;
				} else {
					if (gemData) {
						app.locals.gemData = gemData;
						// console.log(gemData);
						res.status(200).render("gem.hbs", templateData);
					} else {
						res.status(404).send("Fail.");
					}
					mongoose.connection.close();
				}
			});
		});
	} else {
		console.log(
			"GET /gem/%s error: req.params.gemId not a number.",
			req.params.gemId
		);
	}
};

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

partialsDir = path.join(__dirname, "../../views/partials");
app.set("view engine", "hbs");
hbs.registerPartials(partialsDir);
hbs.localsAsTemplateData(app);

app.get("/gem/:gemId", cbGemGet);

app.post("/contact_us.js", cbContactPost);

module.exports = app;
