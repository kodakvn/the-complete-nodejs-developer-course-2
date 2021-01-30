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
        notes.logNote(note);
    } else {
        console.log('can not add note');
    }
} else if (command == 'list') {
    var allNotes = notes.getAll();
    if (allNotes.length === 0) {
        console.log('there is no note');
    } else {
        console.log(`there are ${allNotes.length} notes`);
        allNotes.forEach(notes.logNote);
    }
} else if (command == 'read') {
    var note = notes.getNode(argv.title);
    if (note != null) {
        console.log(`got found`);
        notes.logNote(note);
    } else {
        console.log('note not found');
    }
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
