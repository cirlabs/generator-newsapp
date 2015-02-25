# generator-newsapp [![Build Status](https://secure.travis-ci.org/cirlabs/generator-newsapp.png?branch=master)](https://travis-ci.org/cirlabs/generator-newsapp) [![npm version](https://badge.fury.io/js/generator-newsapp.svg)](http://badge.fury.io/js/generator-newsapp)

Scaffold news applications like a boss. generator-newsapp highlights include:

- Drop-in integration with our [Django Project Template](https://github.com/cirlabs/django-project-template) for blazing fast and awesome development (__recommended__)
- Built-in server and Grunt tasks for standalone development without Django
- Sass (optional)
- Preconfiguration for Amazon S3 deployment

## Requirements
- [Node.js 0.12.x](http://nodejs.org/) or [io.js 1.2.x](https://iojs.org/en/index.html)
- [Yeoman](http://yeoman.io/). Install with `npm install -g yo`

## Templates
__generator-newsapp__ includes two types of templates: `Django Project Template` and `Front-end Web App Template`.

`Django Project Template` is meant to work in tandem with our actual [Django Project Template](https://github.com/cirlabs/django-project-template). Use this template when you want the convenience Grunt and Bower with the power of Django and Python web development.

`Front-end Web App Template` is similar to the Yeoman team's [generator-webapp](https://github.com/yeoman/generator-webapp) and is meant to be a generator for a web application. Use this template if you're not relying on Django for data manipulation and what to do everything client side.

## Setup
```bash
$ npm install -g generator-newsapp
$ mkdir awesome-newsapp && cd $_
$ yo newsapp # follow prompts
$ mv credentials.template credentials.json
$ grunt serve
```
### Help
Need help? Open an issue in: [ISSUES](https://github.com/cirlabs/generator-newsapp/issues)

### Contributing
Want to improve the template? Fork the repo, add your changes and send a pull request.

### Thanks
Thanks to the Yeoman team for an excellent project. Yeoman makes web developers' lives a lot easier.

### License
The BSD License (BSD)

Copyright (c) '93 Til ... The Center for Investigative Reporting

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
