console.log('starting node.js');

const fs = require('fs');

var addNode = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        console.log('there is an error when read json file');
    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('can not add note, duplicate!');
    }
};

var getAll = () => {
    console.log('getting all notes');
};

var getNode = (title) => {
    console.log('read note', title);
};

var remoteNote = (title) => {
    console.log('remove note', title);
};

module.exports = {
    addNode,
    getAll,
    getNode,
    remoteNote
};