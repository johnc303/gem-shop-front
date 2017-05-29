// Gruntfile.js

module.exports = function(grunt) {

	// var mozjpeg = require('imagemin-mozjpeg');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		

		// configure jshint to validate js files -----------------------------------
    	jshint: {
      		options: {
        		reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      		},
      		// when this task is run, lint the Gruntfile and all js files in _js
      		build: [
      			'Gruntfile.js',
      			'src/_js/*.js'
      			]
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
          			'dist/_css/global.min.css': 'src/_css/global.css'
        		}
        	}
        },

        imagemin: {
        	build: {
        		files: [
	        		{
	        			expand: true,
	        			cwd: 'src/',
	        			src: ['img/**/*.{png,jpg,gif}'],
	        			dest: 'dist/'
	        		}
	        	]
        	}
        },

        'compile-handlebars': {
            build: {
                files: [ {
                    expand: true,
                    cwd: 'src/templates',
                    src:  '*.hbt',
                    dest: 'dist/',
                    ext: '.htm'
                }],
                partials: 'src/templates/partials/*.hbt',
                postHTML: 'src/templates/partials/footer.htm',
                templateData: 'src/_js/templateData.json'
            }
        },


        copy: {
        	build: {
        		files: [
        		// Copy HTML files into root
        	/*		{
        				expand: true,
        				src: 'src/*.htm',
        				dest: 'dist/',
        				flatten: true, 
        				options: {
        					process: function( content, srcpath) {
        						return content.replace(/.css/g, '.min.css');
        					}
        				}
        			},
        		// Copy template files into template directory
        			{
        				expand: true,
        				src: 'src/templates/*.hbt',
        				dest: 'dist/templates/',
        				flatten: true
        			},*/
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

        clean: {
        	build: [ 'dist/' ]
        },

        watch: {
			// for stylesheets, watch css files 
			// only run cssmin 
			stylesheets: {
				files: ['src/_css/*.css'], 
				tasks: ['cssmin'] 
			},

			// for scripts, run jshint and uglify 
			scripts: { 
				files: ['Gruntfile.js', 'src/_js/*.js'],
				tasks: ['jshint', 'uglify']
			},

			images: {
				files: 'src/img/*.{png,jpg,gif}',
				tasks: ['imagemin']
			},

			templates: {
				files: 'src/templates/**/*',
				tasks: ['compile-handlebars']
			}
		}
    });

	// ============= // CREATE TASKS ========== //
    
	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'cssmin', 'imagemin','compile-handlebars', 'copy']);




	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-compile-handlebars');

};