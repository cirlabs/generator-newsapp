# generator-newsapp [![Build Status](https://secure.travis-ci.org/cirlabs/generator-newsapp.png?branch=master)](http://travis-ci.org/cirlabs/generator-newsapp) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

Part of CIRs three-part deploy:

![Three Amigos](http://collider.com/wp-content/uploads/three-amigos-blu-ray-slice.jpg)

[ops](https://github.com/BayCitizen/ops) | [django-project-template](https://github.com/cirlabs/django-project-template) | [**generator-newsapp**](https://github.com/cirlabs/generator-newsapp/)

# NOTE
This yeoman generator is currently narrowly tailored to our Django Project Template (link above). While the goal is create a generic generator for flat graphics, it's not currently supported at this time. If you're, interested in a yeoman generator for news app development, check out Kevin Schual's excellent graphic generator: [kevinschaul/generator-graphic](https://github.com/kevinschaul/generator-graphic).

## Getting Started

- Install: `npm install -g generator-newsapp`
- Run: `yo newsapp`
- Run `grunt` for building, sass and js linting.


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

Third-party dependencies are managed with [bower-install](https://github.com/stephenplusplus/grunt-bower-install). Add new dependencies using **Bower** and then run the **Grunt** task to load them:

```bash
  bower install --save jquery
  grunt bower-install
```

This works if the package author has followed the [Bower spec](https://github.com/bower/bower.json-spec). If the files are not automatically added to your index.html, check with the package's repo for support and/or file an issue with them to have it updated.

To manually add dependencies, `bower install depName --save` to get the files, then add a `script` or `style` tag to your `index.html` or an other appropriate place.