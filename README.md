# generator-newsapp [![Build Status](https://secure.travis-ci.org/cirlabs/generator-newsapp.png?branch=master)](http://travis-ci.org/cirlabs/generator-newsapp) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Part of CIRs three-part deploy:

![Three Amigos](http://collider.com/wp-content/uploads/three-amigos-blu-ray-slice.jpg)

[ops](https://github.com/BayCitizen/ops) | [django-project-template](https://github.com/cirlabs/django-project-template) | [**generator-newsapp**](https://github.com/cirlabs/generator-newsapp/)

## Features

- Prompt to download popular JS libraries used in data-driven projects
- [Livereload](http://livereload.com/) setup for reloading the web page on save
- Sass enabled with [Libsass](https://github.com/hcatlin/libsass) (so you don't need Ruby or Compass installed to use it!)
- Bower for dependency management
- Grunt tasks to optimize project for deployment to Amazon S3 or Github Pages

## Getting Started

- Install: `npm install -g generator-newsapp`
- Run: `yo newsapp`
- Run `grunt` for building, sass and js linting.

## Template Types

__generator_newsapp__ comes with two template types: __Django__ and __Flat Graphic__.

### Django Template
The Django template is meant to be used with CIR's [django-project-template](https://github.com/cirlabs/django-project-template). These two libraries work together and brings some more modern frontend tooling to Django/Python web app development. Deployment is handled by the Django project template. Refer to those docs for minification and production builds of your web application.

### Flat Graphic Template
If you don't need or use Django, the Flat Graphic template is the way to go. The Flat Graphic template contains the same dependencies and styles as the Django template, but also contains a built-in Node.js server for developing your project. There are also grunt tasks for minifying, concatenating, linting and building a production version of your application. Deployment is as easy as sending to Amazon S3 or Github Pages.

See the [Yeoman deployment docs](http://yeoman.io/deployment.html) for deploying your finished app to Github Pages. 

#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with [bower-install](https://github.com/stephenplusplus/grunt-bower-install). Add new dependencies using **Bower** and then run the **Grunt** task to load them:

```bash
  bower install --save jquery
  grunt bower-install
```

This works if the package author has followed the [Bower spec](https://github.com/bower/bower.json-spec). If the files are not automatically added to your index.html, check with the package's repo for support and/or file an issue with them to have it updated.

To manually add dependencies, `bower install depName --save` to get the files, then add a `script` or `style` tag to your `index.html` or an other appropriate place.


## Roadmap
Here are some features we'd like to include in no particular order:

- Grunt or Jake task to send `dist` folder to Github Pages or Amazon S3
- Built-in templates for charts and other data-driven graphics
- Auto add `bower install` dependencies to `index.html`
- Test coverage and Travis CI integration for quality assurance
- Generic, non-CIR template for news apps

## Contributing
CIR loves open-source. Will this repo is currently tailored for our needs, we do hope to slowly turn this repo into a more generic and modular generator. Any and all ideas are welcome. Feel free to open an issue with any suggestions.

## License
MIT