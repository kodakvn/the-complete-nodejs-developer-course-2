console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command == 'add') {
    notes.addNode(argv.title, argv.body);
} else if (command == 'list') {
    notes.getAll();
} else if (command == 'read') {
    notes.getNode(argv.title);
} else if (command == 'remove') {
    notes.remoteNote(argv.title);
} else {
    console.log('Command not recognized');
}