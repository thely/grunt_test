module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: "/*! So minified, such wow */"
			},
			build: {
				files: {
					'build/js/global.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'build/js/postconcat.js'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['src/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				}
			},
			css: {
				files: ['src/css/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['./**/*.html', './index.html'],
				tasks: [],
				options: {
					spawn: false
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'nested'
				},
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.scss'],
					dest: 'build/css',
					ext: '.css'
					//'build/css/global.css': ['src/css/base.scss']
				}]
			}
		},
		connect: {
			server: {
				options: {
					livereload: true,
					port: 9001,
				}		
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['sass', 'concat', 'uglify', 'connect', 'watch']);
	grunt.registerTask('dev', ['connect', 'watch']);
}


/* //Susy sample code
module.exports = function(grunt) {
	//Project config
	grunt.initConfig({
		sass: {
			app: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			},
			options: {
				sourceMap: true,
				outputStyle: 'nested',
				imagePath: "../"
			}
		},
		watch: {
			sass: {
				files: ['scss/*.{scss,sass}'],
				tasks: ['sass']
			},
			options: {
				livereload: true,
				spawn: false
			}
		}
	});

	//Load Grunt tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Default tasks
	grunt.registerTask('default', ['sass', 'watch']);
}
*/