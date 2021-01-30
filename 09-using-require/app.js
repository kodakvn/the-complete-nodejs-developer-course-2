console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const { demand } = require('yargs');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleDescription = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyDescription = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleDescription,
        body: bodyDescription
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleDescription
    })
    .command('remove', 'Remove a note', {
        title: titleDescription
    })
    .help()
    .argv;
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
