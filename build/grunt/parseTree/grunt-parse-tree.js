module.exports = function(grunt) {
	grunt.registerMultiTask(
		"parse-tree",
		"Parses tree images data",
		function() {
			var json = grunt.file.readJSON(this.filesSrc.pop());
			var result = [];
			var currGem = {};
			var gemId = "";
			var imageName = "";
			function ImageArray(_gemId, _imageNames) {
				this.gemId = parseInt(_gemId);
				this.imageNames = _imageNames;
			}

			for (gemId in json) {
				currGem = json[gemId];
				imageArray = new ImageArray(gemId, []);
				for (imageName in currGem) {
					imageArray.imageNames.push(imageName);
				}
				result.push(imageArray);
			}
			// for ( gemId in json ) {
			// 	currGem = json[gemId];
			// 	if ( !result[gemId] ) {
			// 		result[gemId] = [];
			// 	}
			// 	for ( imageName in currGem ) {
			// 		result[gemId].push( imageName );
			// 	}
			// }

			// grunt.config.set("imageFileContents", result);
			grunt.file.write(
				"tmp/img/images.json",
				JSON.stringify(result, null, "\t")
			);
		}
	);
};
