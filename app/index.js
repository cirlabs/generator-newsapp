'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(require('yosay')());
    this.log(chalk.magenta(
      'Welcome to the stunning ' + chalk.red('Newsapp') + ' generator!' +
      'Out of the box I include HTML5 Boilerplate, jQuery, and a ' +
      'Gruntfile.js to build your app.'
    ));


    var prompts = [{
      type: 'list',
      name: 'template',
      message: 'Choose application template:',
      choices: [{
        name: 'Django',
        value: 'includeDjango'
      }, {
        name: 'Webapp',
        value: 'includeWebapp'
      }]
    },{
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'Bootstrap',
        value: 'includeBootstrap',
        checked: true
      },{
        name: 'Sass',
        value: 'includeSass',
        checked: false
      },{
        name: 'Modernizr',
        value: 'includeModernizr',
        checked: false
      }]
    }, {
      when: function (answers) {
        return answers && answers.features &&
          answers.features.indexOf('includeSass') !== -1;
      },
      type: 'confirm',
      name: 'libsass',
      value: 'includeLibSass',
      message: 'Would you like to use libsass? Read up more at \n' +
        chalk.green('https://github.com/andrew/node-sass#node-sass'),
      default: false
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features;
      var template = answers.template;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }

      function hasTemplate(temp) {
        return template && template.indexOf(temp) !== -1
      }

      this.includeSass = hasFeature('includeSass');
      this.includeBootstrap = hasFeature('includeBootstrap');
      this.includeModernizr = hasFeature('includeModernizr');

      this.includeDjango =  hasTemplate('includeDjango');
      this.includeWebapp = hasTemplate('includeWebapp');

      this.includeLibSass = answers.libsass;
      this.includeRubySass = !answers.libsass;

      done();
    }.bind(this));
  },

  writing: {
    packageJSON: function () {
      this.template('_package.json', 'package.json');
    },
    gruntfile: function () {
      this.template('Gruntfile.js');
    },
    git: function () {
      // Django projects already contain a gitignore
      // So we only need this for webapps
      this.template('gitignore', '.gitignore');
    },
    jshint: function () {
      this.copy('jshintrc', '.jshintrc');
    },
    bower: function () {
      // Since bower.json can be a JSON obj
      // We'll just contruct the dependencies here
      var bower = {
        name: this._.slugify(this.appname),
        private: true,
        dependencies: {}
      };

      // Dependencies
      bower.dependencies.jquery = "~1.11.1";
      bower.dependencies.modernizr = "~2.8.2";
      bower.dependencies.underscore = "~1.8.1";

      // Write
      this.template('bowerrc', '.bowerrc');
      this.write('bower.json', JSON.stringify(bower, null, 2));
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
