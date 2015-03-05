module.exports = function(grunt) {
	require('grunt-load')(grunt).loadNpmTasks();

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
		},
		jasmine: {
			pivotal: {
				src: 'src/**/*.js',
				options: {
					specs: 'tests/*Spec.js',
					vendor: 'bower_components/jquery/jquery.js'
				}
			}
		},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'jasmine', 'uglify']);
};
