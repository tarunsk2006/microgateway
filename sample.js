// sample.js
//
'use strict';

var mg = require('./lib/microgw');
var fs = require('fs');

// config dir
process.env.CONFIG_DIR = __dirname + '/definitions/myapp';
process.env.NODE_ENV = 'production';
mg.start(3000);
