var _templateData = {};
var mongoose = require( 'mongoose' );
var Catalogue = require( '../src/_js/data/schemas/catalogueSchema' );
var Nav = require( '../src/_js/data/schemas/navSchema' );
var ie8 = require( '../src/_js/data/schemas/ie8Schema' );
var Styles = require( '../src/_js/data/schemas/stylesSchema' );
var Themes = require( '../src/_js/data/schemas/themesSchema' );
var _catalogue = [];
var docs = Catalogue.find( {}, function ( err, info ) {
	if ( err ) { 
		throw err; 
	} else {
		return info;
	}
} );

mongoose.connect( 'mongodb://localhost/gem-shop-front' );
_templateData.CATALOGUE = docs;
_templateData = {
	CATALOGUE: _catalogue
};
console.log( _templateData );

module.exports =  {
	build: {
		files: [ 
			{
				expand: true,
				cwd: 'src/templates',
				src:  '*.hbs',
				dest: 'dist/',
				ext: '.htm'
			} 
		],
		partials: 'src/templates/partials/*.hbs',
		postHTML: 'src/templates/partials/footer.htm',
		templateData: _templateData,
		helpers: 'src/templates/helpers/*.js'
	}
};