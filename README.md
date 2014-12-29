# shields-lightweight

*A bare minimum implementation of SVG badge generation extracted from the source code https://github.com/badges/shields*

Only depends on [doT](http://olado.github.io/doT/index.html).

## Install

    npm install shields-lightweight

## Usage

    var shields = require('shields-lightweight');
    var svgBadge = shields.svg('subject', 'status', 'red', 'flat');

