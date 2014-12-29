# shields-lightweight

[![Build status](https://travis-ci.org/albanm/shields-lightweight.svg)](https://travis-ci.org/albanm/shields-lightweight)
[![Code Climate](https://codeclimate.com/github/albanm/shields-lightweight/badges/gpa.svg)](https://codeclimate.com/github/albanm/shields-lightweight)
[![NPM version](https://badge.fury.io/js/libxslt.svg)](http://badge.fury.io/js/libxslt)

*A bare minimum implementation of SVG badge generation extracted from the source code [shields](https://github.com/badges/shields)*

Only depends on [doT](http://olado.github.io/doT/index.html).

## Install

    npm install shields-lightweight

## Usage

    var shields = require('shields-lightweight');
    var svgBadge = shields.svg('subject', 'status', 'red', 'flat');

