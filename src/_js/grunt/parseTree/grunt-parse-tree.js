module.exports = function ( grunt ) {
	grunt.registerMultiTask( 'parse-tree', 'Parses tree images data', 
		function () {
			var json = grunt.file.readJSON( this.filesSrc.pop() );
			var result = {};
			var currGem = {};
			var gemId = "";
			var imageName = "";
			
			for ( gemId in json ) {
				currGem = json[gemId];
				if ( !result[gemId] ) {
					result[gemId] = [];
				}
				for ( imageName in currGem ) {
					result[gemId].push( imageName );
				}
			}

			/*
			var MongoClient = require( 'mongodb' ).MongoClient;
			var url = 'mongodb://localhost:27017/gem-shop-front';
			var db  = MongoClient.connect( url, function ( err, db ) {
				var collection = db.collection( 'images' );
				if ( !err ) {
					for ( gemId in result ) {
						var document = [];
						for ( imageName in result[gemId] ) {
							collection.insert( { _id: gemId, imageName } );
						}
					}
				}
			} );*/
			//	grunt.config.set( 'imageFileContents', result );
			grunt.file.write( 'tmp/img/images.json', JSON.stringify( result, null, "\n\t" ) );
		}
	);
};