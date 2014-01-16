/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


describe('newsapp generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('newsapp:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('the generator can be required without throwing', function () {
        // not testing the actual run of generators yet
        this.app = require('../app');
    });

    // it('creates expected files for Django CIR template', function (done) {
    //     var expected = [
    //         // add files you expect to exist here.
    //         '.jshintrc',
    //         '.editorconfig'
    //     ];

    //     helpers.mockPrompt(this.app, {
    //         'someOption': true
    //     });
    //     this.app.options['skip-install'] = true;
    //     this.app.run({}, function () {
    //         helpers.assertFiles(expected);
    //         done();
    //     });
    // });

    // it('creates expected files for Django generic template', function (done) {
    //     var expected = [
    //         // add files you expect to exist here.
    //         '.jshintrc',
    //         '.editorconfig'
    //     ];

    //     helpers.mockPrompt(this.app, {
    //         'someOption': true
    //     });
    //     this.app.options['skip-install'] = true;
    //     this.app.run({}, function () {
    //         helpers.assertFiles(expected);
    //         done();
    //     });
    // });

    // it('creates expected files for Flat Graphic CIR template', function (done) {
    //     var expected = [
    //         // add files you expect to exist here.
    //         '.jshintrc',
    //         '.editorconfig'
    //     ];

    //     helpers.mockPrompt(this.app, {
    //         'someOption': true
    //     });
    //     this.app.options['skip-install'] = true;
    //     this.app.run({}, function () {
    //         helpers.assertFiles(expected);
    //         done();
    //     });
    // });

    // it('creates expected files for Flat Graphic generic template', function (done) {
    //     var expected = [
    //         // add files you expect to exist here.
    //         '.jshintrc',
    //         '.editorconfig'
    //     ];

    //     helpers.mockPrompt(this.app, {
    //         'someOption': true
    //     });
    //     this.app.options['skip-install'] = true;
    //     this.app.run({}, function () {
    //         helpers.assertFiles(expected);
    //         done();
    //     });
    // });
});
