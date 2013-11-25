'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var newsapp = require('../lib/newsapp');


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

  // welcome message
  if (!this.options['skip-welcome-message']) {
    newsapp.banner();
    console.log('Out of the box I include HTML5 Boilerplate and jQuery.');
  }


  var prompts = [
    {
      type: 'checkbox',
      name: 'features',
      message: 'Which JavaScript libraries would you like?',
      choices: [{
        name: 'Leaflet.js',
        value: 'hasLeaflet',
      }, {
        name: 'D3.js',
        value: 'hasD3',
      }, {
        name: 'Moment.js',
        value: 'hasMoment',
      }, {
        name: 'Modernizr',
        value: 'includeModernizr',
      }]
    },
    { // CSS Framework
      type: 'list',
      name: 'cssframework',
      message: 'Which CSS framework would you like?',
      choices: [{
          name: 'Bootstrap 3 for Sass',
          value: 'compassBootstrap',
          checked: true
        },
        {
          name: 'Zurb Foundation 5',
          value: 'zurbFoundation',
        }]
    },
    { // MVC JS
      type: 'list',
      name: 'mvcjs',
      message: 'Which MVC JavaScript Framework would you like?',
      choices: [{
        name: 'Backbone.js',
        value: 'hasBackbone',
      }, {
        name: 'Angular.js',
        value: 'hasAngular'
      }, {
        name: 'Ember.js',
        value: 'hasEmber'
      }]
    }
  ];

  this.prompt(prompts, function (props) {
    var features = props.features;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.hasLeaflet = hasFeature('hasLeaflet');
    this.hasD3 = hasFeature('hasD3');
    this.hasMoment = hasFeature('hasMoment');
    this.includeModernizr = hasFeature('includeModernizr');
    this.compassBootstrap = hasFeature('compassBootstrap');
    this.zurbFoundation = hasFeature('zurbFoundation');

    cb();
  }.bind(this));
};

NewsappGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');

  this.template('Gruntfile.js', 'Gruntfile.js')  
};

NewsappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
