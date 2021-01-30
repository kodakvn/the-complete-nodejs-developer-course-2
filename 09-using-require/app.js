console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('kodakvn'));
var filterredArray = _.uniq(['kodak', 1, 'kodak', 1, 2, 3, 4]);
console.log(filterredArray);