// var _templateData = {
// 	CATALOGUE: [],
// 	NAV: [],
// 	IE8: [],
// 	STYLES: [],
// 	THEME: 0
// };

// function hydrate ( myArray, mongooseModel ) {
// 	var mongoose = require( 'mongoose' );
// 	var schemaPath = "..src/_js/data/schemas/" + mongooseModel + "Schema";
// 	var Model = require( schemaPath );

// 	mongoose.connect( 'mongodb://localhost/gem-shop-front', function () {
// 		Model.find( {}, function ( err, data ) {
// 				var item = {};

// 				if ( err ) {
// 					throw err;
// 				} else {
// 					console.log( "data: " + data );
// 					// for ( item in data ) {
// 					// 	myArray.push( data[item] );
// 					// }
// 					// console.log( "item: %s", _templateData );
// 				} 
// 			} );
// 		} );

// }



// var Catalogue = require( '../src/_js/data/schemas/catalogueSchema' );
// // var Nav = require( '../src/_js/data/schemas/navSchema' );
// // var ie8 = require( '../src/_js/data/schemas/ie8Schema' );
// // var Styles = require( '../src/_js/data/schemas/stylesSchema' );
// // var Themes = require( '../src/_js/data/schemas/themesSchema' );
// // var currItem = {};

// mongoose.connect( 'mongodb://localhost/gem-shop-front', function () {
	
// _templateData.CATALOGUE;

// console.log( _templateData );

module.exports = function ( grunt ) {
	var _templateData = grunt.file.readJSON( 'src/_js/templateData.json' );
	var _CAROUSEL_DATA = [
			_templateData.CATALOGUE_DATA[0],
			_templateData.CATALOGUE_DATA[9],
			_templateData.CATALOGUE_DATA[15],
			_templateData.CATALOGUE_DATA[21],
			_templateData.CATALOGUE_DATA[25]
			];
	// var _LIGHTBOX_DATA = grunt.file.readJSON( 'tmp/img/images.json' );

	// var _theme = 1;
	// var _bootstrapTheme = 'src/third-party/bootstrap/bootstrap' + _templateData.THEME[_theme].file + '.css';
	// _templateData.LIGHTBOX_DATA = _LIGHTBOX_DATA;
	_templateData.CAROUSEL_DATA = _CAROUSEL_DATA;
	// console.log( "templateData: %s", JSON.stringify( _templateData ) );

	return {
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
};