module.exports = function(grunt) {
	var _templateData = grunt.file.readJSON("src/_js/templateData.json");
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
					cwd: "src/views",
					src: "*.hbs",
					dest: "dist/",
					ext: ".htm"
				}
			],
			partials: "src/views/partials/*.hbs",
			postHTML: "src/views/partials/footer.htm",
			templateData: _templateData,
			helpers: "src/views/helpers/*.js"
		}
	};
};
