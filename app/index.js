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
    console.log('Out of the box I include Modernizr and jQuery.');
  }


  var prompts = [
    {
      type: 'list',
      name: 'appType',
      message: 'Hey! Before we get started, are you building a standalone flat interactive graphic or a Django template?',
      choices: [{
        name: 'Flat Graphic',
        value: 'flatGraphic'
      }, {
        name: 'Django Template',
        value: 'django'
      }]
    },
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
        name: 'jQuery UI',
        value: 'hasjQueryUI',
      }]
    },
    { // CSS Framework
      type: 'list',
      name: 'cssFramework',
      message: 'Which CSS framework would you like?',
      choices: [{
          name: 'Bootstrap 3 for Sass',
          value: 'compassBootstrap',
          checked: true
        },
        {
          name: 'Zurb Foundation 5',
          value: 'zurbFoundation',
        },
        {
          name: 'None',
          value: 'noneCSS',
        }]
    },
    { // MVC JS
      type: 'list',
      name: 'mvcJS',
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
      }, {
        name: 'None',
        value: 'hasNone'
      }]
    }
  ];

  this.prompt(prompts, function (props) {
    var appType = props.appType,
        features = props.features,
        cssFramework = props.cssFramework,
        mvcJS = props.mvcJS;

    function hasFeature(feat, propName) { return propName.indexOf(feat) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.flatGraphic = hasFeature('flatGraphic', appType);
    this.django = hasFeature('django', appType);

    this.hasLeaflet = hasFeature('hasLeaflet', features);
    this.hasD3 = hasFeature('hasD3', features);
    this.hasMoment = hasFeature('hasMoment', features);
    this.hasjQueryUI = hasFeature('hasjQueryUI', features);

    this.compassBootstrap = hasFeature('compassBootstrap', cssFramework);
    this.zurbFoundation = hasFeature('zurbFoundation', cssFramework);
    this.noneCSS = hasFeature('noneCSS', cssFramework)

    this.hasBackbone = hasFeature('hasBackbone', mvcJS);
    this.hasAngular = hasFeature('hasAngular', mvcJS);
    this.hasEmber = hasFeature('hasEmber', mvcJS);
    this.hasNone = hasFeature('hasNone', mvcJS);

    cb();
  }.bind(this));
};

NewsappGenerator.prototype.app = function app() {
  // Store `this` context in self var
  var self = this;

  if (self.django) {
    // Django Template
    self.mkdir('assets');
    self.mkdir('assets/styles/scss')
    self.template('_django.html', 'templates/index.html');
    self.template('_header.html', 'templates/_header.html');
    self.template('_header-slim.html', 'templates/_header-slim.html');
    self.template('_header-comp2.html', 'templates/_header-comp2.html');
    self.template('_header-comp2.scss', 'assets/styles/scss/_header-comp2.scss');
    self.copy('main.js', 'assets/scripts/main.js');
    self.copy('_headers.scss', 'assets/styles/scss/_headers.scss');
    self.copy('_defaults.scss', 'assets/styles/scss/_defaults.scss');
    self.template('_main.scss', 'assets/styles/scss/main.scss');
  } else {
    // Flat Graphic Template
    self.mkdir('app');
    self.mkdir('app/styles/')
    self.mkdir('app/scripts/')

    // index
    self.template('_flatGraphic.html', 'app/index.html');

    // styles
    self.copy('_headers.scss', 'app/styles/scss/_headers.scss');
    self.copy('_defaults.scss', 'app/styles/scss/_defaults.scss');
    self.template('_main.scss', 'app/styles/scss/main.scss');

    // JS
    self.copy('main.js', 'app/scripts/main.js');
  }

  self.copy('_package.json', 'package.json');
  self.template('_bower.json', 'bower.json');
  self.copy('_README.md', 'README.md');


  self.template('Gruntfile.js', 'Gruntfile.js')  
};

NewsappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.template('_bowerrc', '.bowerrc');
};
