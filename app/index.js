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
      message: 'Choose a template type:',
      choices: [{
        name: 'Flat Graphic (CIR)',
        value: 'flatGraphic'
      }, {
        name: 'Django Template (CIR)',
        value: 'django'
      }, {
        name: 'Flat Graphic (Generic)',
        value: 'flatGraphicGeneric'
      }, {
        name: 'Django Template (Generic)',
        value: 'djangoGeneric'
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
    this.flatGraphicGeneric = hasFeature('flatGraphicGeneric', appType);
    this.djangoGeneric = hasFeature('djangoGeneric', appType);


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

NewsappGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

NewsappGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

NewsappGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

NewsappGenerator.prototype.bower = function bower() {
  this.template('_bower.json', 'bower.json');
  this.template('_bowerrc', '.bowerrc');
}

NewsappGenerator.prototype.graphic = function graphic () {
  var self = this;

  if (self.flatGraphic || self.flatGraphicGeneric) {
    // Flat Graphic Template
    self.mkdir('app');
    self.mkdir('app/styles/')
    self.mkdir('app/scripts/')
    self.mkdir('app/images/');
    self.mkdir('app/data/');

    // index
    self.template('_flatGraphic.html', 'app/index.html');

    // styles
    self.template('_header-comp2.scss', 'app/styles/scss/_header-comp2.scss');
    self.copy('_headers.scss', 'app/styles/scss/_headers.scss');
    self.copy('_defaults.scss', 'app/styles/scss/_defaults.scss');
    self.template('_main.scss', 'app/styles/scss/main.scss');

    // JS
    self.copy('main.js', 'app/scripts/main.js');
  }
}

NewsappGenerator.prototype.django = function django() {
  // Store `this` context in self var
  var self = this;

  if (self.django || self.djangoGeneric) {
    // Directories
    self.mkdir('assets');
    self.mkdir('assets/styles/scss');

    // Index Page
    self.template('_django.html', 'templates/index.html');

    // Various Headers
    self.template('_header.html', 'templates/_header.html');
    self.template('_header-slim.html', 'templates/_header-slim.html');
    self.template('_header-slim.html', 'templates/_header-slim.html');
    self.template('_header-comp2.html', 'templates/_header-comp2.html');
    self.template('_header-generic.html', 'templates/_header-generic.html');

    // SCSS
    self.template('_header-comp2.scss', 'assets/styles/scss/_header-comp2.scss');
    self.copy('_headers.scss', 'assets/styles/scss/_headers.scss');
    self.copy('_defaults.scss', 'assets/styles/scss/_defaults.scss');
    self.template('_main.scss', 'assets/styles/scss/main.scss');

    // JS
    self.copy('main.js', 'assets/scripts/main.js');
  }
};