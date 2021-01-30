console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command == 'add') {
    var note = notes.addNode(argv.title, argv.body);
    if (note != null) {
        console.log('note added');
        console.log('----');
        console.log(`Title: ${note.title}`);xw
        console.log(`Body: ${note.body}`);
    } else {
        console.log('can not add note');
    }
} else if (command == 'list') {
    notes.getAll();
} else if (command == 'read') {
    notes.getNode(argv.title);
} else if (command == 'remove') {
    var ret = notes.removeNote(argv.title);
    if (ret) {
        console.log('note removed!');
    } else {
        console.log('note not found');
    }
} else {
    console.log('Command not recognized');
}
