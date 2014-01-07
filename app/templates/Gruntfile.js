// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {

  // configurable paths
  var yeoman = {
    app: 'app',
    dist: 'dist'
  };

  // load all grunt tasks from package.json
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    yeoman: yeoman,
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        <% if (django) { %>files: ['assets/styles/scss/*.scss'],<% } %>
        <% if (flatGraphic) { %>files: ['app/styles/scss/*.scss'],<% } %>
        tasks: ['sass'],
        <% if (django) { %> options: { livereload: true } <% } %>
      },
      src: {
        <% if (django) { %>files: ['templates/*.html', 'assets/scripts/*.js'],<% } %>
        <% if (flatGraphic) { %>files: ['app/*.html', 'app/scripts/*.js'],<% } %>
        <% if (django) { %> options: { livereload: true } <% } %>
      },
  <% if (flatGraphic) { %>
        livereload: {
          options: {
            livereload: '<%%= connect.options.livereload %>'
          },
          files: [
            'app/*.html',
            'app/scripts/*.js',
            'app/styles/scss/*.scss'
          ]
        }
  <% } %>
    }, // watch
<% if (flatGraphic) { %>
    // grunt server
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: ['<%%= yeoman.app %>']
        }
      }
    },
<% } %>
    sass: { // Task
      dist: { // Target
        files: { // Dictionary of files
          // 'dest': 'source'
          <% if (django) { %>'assets/styles/main.css': 'assets/styles/scss/main.scss'<% } %>
          <% if (flatGraphic) { %>'app/styles/main.css': 'app/styles/scss/main.scss'<% } %>
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
      files: ['Gruntfile.js', '*/scripts/*.js'],
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

  grunt.registerTask('default', [
    'sass', 
    'watch'
  ]);

<% if (flatGraphic) { %>
  grunt.registerTask('serve', [
    grunt.task.run([
      'sass',
      'connect:livereload',
      'watch'
    ])
  ]);
<% } %>


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
