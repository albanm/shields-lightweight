# shields-lightweight

[![Build status](https://travis-ci.org/albanm/shields-lightweight.svg)](https://travis-ci.org/albanm/shields-lightweight)
[![Code Climate](https://codeclimate.com/github/albanm/shields-lightweight/badges/gpa.svg)](https://codeclimate.com/github/albanm/shields-lightweight)
[![NPM version](https://badge.fury.io/js/shields-lightweight.svg)](http://badge.fury.io/js/shields-lightweight)

*A bare minimum implementation of SVG badge generation extracted from the source code of [shields](https://github.com/badges/shields).*

Only depends on [doT](http://olado.github.io/doT/index.html).

The following badges were generated by shields-lightweight over its own code source using [jshint-reporter-badge](https://github.com/albanm/jshint-reporter-badge), [mocha-reporter-badge](https://github.com/albanm/mocha-reporter-badge) and [lcov2badge](https://github.com/albanm/lcov2badge). If you want to know how, have a look at the [gulpfile](./gulpfile.js) and [travis configuration](./.travis.yml).

![Mocha tests status](http://albanm.github.io/shields-lightweight/mocha-badge.svg)
[![Tests code coverage status](http://albanm.github.io/shields-lightweight/coverage/badge.svg)](http://albanm.github.io/shields-lightweight/coverage/lcov-report/index.html)
[![JSHint status](http://albanm.github.io/shields-lightweight/jshint-badge.svg)](http://albanm.github.io/shields-lightweight/jshint.html)


## Install

    npm install shields-lightweight

## Usage

    var shields = require('shields-lightweight');
    var svgBadge = shields.svg('subject', 'status', 'red', 'flat');

