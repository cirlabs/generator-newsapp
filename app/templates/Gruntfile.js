// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  // load all grunt tasks from package.json
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['assets/styles/scss/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    sass: { // Task
      dist: { // Target
        files: { // Dictionary of files
          'assets/styles/main.css': 'assets/styles/scss/main.scss'// 'dest': 'source'
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // files to concatenate
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'assets/javascripts/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
  });

  grunt.registerTask('default', ['watch', 'sass']); 


  // grunt.registerTask('build', [
  //   'clean:dist',
  //   'useminPrepare',
  //   'concurrent:dist',
  //   'cssmin',
  //   'concat',
  //   'uglify',
  //   'copy',
  //   'rev',
  //   'usemin'
  // ]);

}
