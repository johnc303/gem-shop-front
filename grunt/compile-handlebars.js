module.exports = function(grunt) {
	var _templateData = grunt.file.readJSON("build/data/templateData.json");
	// var _LIGHTBOX_DATA = grunt.file.readJSON( 'tmp/img/images.json' );
	// var templates = require("../src/_js/data/templateDBData.js");

	// console.log(templates);
	// var done = this.async();
	// var _templateData = new templates.TemplateData();

	// done();
	// var _theme = 1;
	// var _bootstrapTheme = 'src/third-party/bootstrap/bootstrap' + _templateData.THEME[_theme].file + '.css';
	// _templateData.LIGHTBOX_DATA = _LIGHTBOX_DATA;

	// console.log( "templateData: %s", JSON.stringify( _templateData ) );

	// console.log(_templateData);
	return {
		build: {
			files: [
				{
					expand: true,
					cwd: "build/views",
					src: "*.hbs",
					dest: "dist/",
					ext: ".htm"
				}
			],
			partials: "build/views/partials/*.hbs",
			postHTML: "build/views/partials/footer.htm",
			templateData: _templateData,
			helpers: "build/views/helpers/*.js"
		}
	};
};
