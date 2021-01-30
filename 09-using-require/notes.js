console.log('starting node.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        console.log('there is an error when read json file');
    }
    return [];
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNode = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    return null;
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