'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NewsappGenerator = module.exports = function NewsappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NewsappGenerator, yeoman.generators.Base);

NewsappGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // welcome message
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
    console.log('Out of the box I include HTML5 Boilerplate and jQuery.');
  }


  var prompts = [{
      type: 'checkbox',
      name: 'features',
      message: 'What JavaScript libraries would you like?'
      choices: [{
        name: 'Leaflet.js',
        value: 'hasLeaflet',
        checked: true
      }, {
        name: 'D3.js',
        value: 'hasD3',
        checked: true
      }, {
        name: 'Moment.js',
        value: 'hasMoment',
        checked: true
      }, {
        name: 'Modernizr',
        value: 'hasModernizr',
        checked: true
      }]
    }, { // CSS Framework
      type: 'checkbox',
      name: 'features',
      message: 'What CSS framework would you like?',
      choices: [{
          name: 'Bootstrap 3 for Sass',
          value: 'compassBootstrap',
          checked: true
        },
        {
          name: 'Zurb Foundation 5',
          value: 'zurbFoundation',
        }]
    }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

NewsappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

NewsappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
