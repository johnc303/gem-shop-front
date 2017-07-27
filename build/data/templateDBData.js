var TEMPLATE_DATA = {
	id: "Templating data",
	description: "Grabs data for the templates from the DB.",
	_CATALOGUE: [],
	_NAV: [],
	_IE8: [],
	_STYLES: [],
	_THEME: 0,
	_CAROUSEL_DATA: [],

	/*
TODO: THEMES
*/

	_fillCatalogue: function(err, data) {
		if (err) {
			throw err;
		} else {
			this._CATALOGUE = data;
			this._CAROUSEL_DATA = [
				this._CATALOGUE[0],
				this._CATALOGUE[9],
				this._CATALOGUE[15],
				this._CATALOGUE[21],
				this._CATALOGUE[25]
			];
		}
	},

	_fillNav: function(err, data) {
		if (err) {
			throw err;
		}
		this._NAV = data;
	},

	_fillIe8: function(err, data) {
		if (err) {
			throw err;
		}
		this._IE8 = data;
	},

	_fillStyles: function(err, data) {
		if (err) {
			throw err;
		}
		this._STYLES = data;
	},

	_fillImages: function(err, data) {
		if (err) {
			throw err;
		}
		this._IMAGES = data;
	},

	init: function() {
		var mongoose = require("mongoose");
		var async = require("async");
		console.log(__dirname);
		var Catalogue = require("./schemas/catalogueSchema");
		var Nav = require("./schemas/navSchema");
		var ie8 = require("./schemas/ie8Schema");
		var Styles = require("./schemas/stylesSchema");
		// TODO  var Themes = require("./schemas/themesSchema");
		var Images = require("./schemas/imagesSchema");
		mongoose.connect("mongodb://localhost/gem-shop-front", {
			useMongoClient: true
		});

		async.parallel(
			[
				function(callback) {
					callback(
						Catalogue.find(
							{},
							TEMPLATE_DATA._fillCatalogue(err, results)
						)
					);
				},
				function(callback) {
					callback(
						Nav.find({}, TEMPLATE_DATA._fillNav(err, results))
					);
				},
				function(callback) {
					callback(
						ie8.find({}, TEMPLATE_DATA._fillIe8(err, results))
					);
				},
				function(callback) {
					callback(
						Styles.find({}, TEMPLATE_DATA._fillStyles(err, results))
					);
				},
				function(callback) {
					callback(
						Images.find({}, TEMPLATE_DATA._fillImages(err, results))
					);
				}
			],
			function(err, results) {
				if (err) {
					console.log("failure: " + err);
				} else {
					console.log("template data: " + results);
				}
			}
		);
		mongoose.connection.close();
	},

	terminal: true
};

function TemplateData() {
	//TEMPLATE_DATA.init();
	this.CATALOGUE = TEMPLATE_DATA._CATALOGUE;
	this.NAV = TEMPLATE_DATA._NAV;
	this.IE8 = TEMPLATE_DATA._IE8;
	this.STYLES = TEMPLATE_DATA._STYLES;
	this.THEME = TEMPLATE_DATA._THEME;
	this.CAROUSEL_DATA = TEMPLATE_DATA._CAROUSEL_DATA;
	this.IMAGES = TEMPLATE_DATA._IMAGES;
}

module.exports = TemplateData();
