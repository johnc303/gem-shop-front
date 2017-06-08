// Gruntfile.js

module.exports = function( grunt ) {
	// var mozjpeg = require( 'imagemin-mozjpeg' );
	var _templateData = grunt.file.readJSON( 'src/_js/templateData.json' );
	var _CAROUSEL_DATA = [
		_templateData.CATALOGUE_DATA[0],
		_templateData.CATALOGUE_DATA[9],
		_templateData.CATALOGUE_DATA[15],
		_templateData.CATALOGUE_DATA[21],
		_templateData.CATALOGUE_DATA[25]
		];
	var _theme = 1;
	var _bootstrapTheme = 'src/third-party/bootstrap/bootstrap' + _templateData.THEME[_theme].file + '.css';

//	var _path = require( 'path' );

	_templateData.CAROUSEL_DATA = _CAROUSEL_DATA;

	grunt.initConfig( {

		pkg: grunt.file.readJSON( 'package.json' ),
		
		// configure jshint to validate js files -----------------------------------
		jshint: {
			options: {
				reporter: require( 'jshint-stylish' ) // use jshint-stylish to make our errors look and read good
			},
			// when this task is run, lint the Gruntfile, js, json files in _js
			build: [
				'Gruntfile.js',
				'src/_js/*.js',
				'src/_js/*.json'
				]
		},

		eslint: {	// automatically takes its ruleset etc from .eslintrc.js
			options: {
				outputFile: 'tmp/eslintRun-<%= grunt.template.today("yyyy-mm-dd-HH") %>.log'
			},
			build: {
				src: [
					'Gruntfile.js',
					'src/_js/*.js',
					'src/_js/templateData.json'
				]
			}
		},

		uglify: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				release: {
					files: [
						{
							expand: true,
							cwd: 'src/_js',
							src: '*.js',
							dest: 'dist/_js'
						}
					]
				}
			}
		},

		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
				},
				build: {
				files: {
					'dist/_css/global.min.css': [ _bootstrapTheme, 'src/_css/global.css' ]
				}
			}
		},

		'responsive_images': {
			build: {
				options: {
					sizes: [
						{ name: 'thumb', width: 120 },
						{ name: 'medium', width: 640 },
						{ name: 'large', width: 1024 }
					],
					customOut: [
						// draw a copywrite notice in the bottom-right corner 
						'-gravity', 'SouthEast', '-font', 'Arial', '-pointsize', '12',
						'-fill', '#445', '-draw', 'text 5,2 \'\u00A9\'',
						'-fill', '#ffe', '-draw', 'text 6,3 \'\u00A9\''
					]
				},
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: ['img/**/*.jpg'],
						dest: 'tmp/'
					}
				]
			}
		},

		imagemin: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'tmp/',
						src: ['img/**/*.jpg'],
						dest: 'dist/'
					}
				]
			}
		},

		'compile-handlebars': {
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
		},

		copy: {
			build: {
				files: [
						// Copy third-party libraries
						{
							expand: true,
							cwd: 'src/third-party/',
							src: '**/*',
							dest: 'dist/third-party/'
						}
				]
			}
		},

		express: {
			build: {
				options: {
					server: 'src/_js/gem-shop-front.js',
					hostname: '*',
					port: 3000,
					bases: [ 'dist' ],
					serverreload: true
				}
			}
		},

		clean: {
			build: [ 'dist/', 'tmp/img' ]
		},

        watch: {
			// for stylesheets, watch css files 
			// only run cssmin 
			stylesheets: {
				files: [ 'src/_css/*.css' ], 
				tasks: [ 'cssmin' ] 
			},

			// for scripts, run jshint and uglify 
			scripts: { 
				files: [ 'Gruntfile.js', 'src/_js/*.js', 'templates/helpers/*.js', '.eslintrc.js' ],
				tasks: [ 'jshint', 'eslint', 'cssmin', 'uglify' ]
			},

			images: {
				files: 'src/img/**/*.{png,jpg,gif}',
				tasks: [ 'imagemin' ]
			},

			templates: { 
				files: [ 'Gruntfile.js', 'src/templates/**/*.{hbs,htm}', 'src/_js/templateData.json' ],
				tasks: [ 'compile-handlebars' ]
			}

/*
			webServer: {
				files: [ 'src/_js/gem-shop-front.js' ],
				tasks: [ 'express-restart' ]
			}
*/
		}
	} );

	// ============= // CREATE TASKS ========== //
	grunt.registerTask( 'myServer', ['express', 'express-keepalive'] );
	grunt.registerTask( 'default', ['clean', 'responsive_images', 'imagemin', 'jshint', 'eslint', 'uglify', 'cssmin', 'compile-handlebars', 'copy'] );

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'gruntify-eslint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
    grunt.loadNpmTasks( 'grunt-compile-handlebars' );
    grunt.loadNpmTasks( 'grunt-responsive-images' );
    grunt.loadNpmTasks( 'grunt-express' );
};