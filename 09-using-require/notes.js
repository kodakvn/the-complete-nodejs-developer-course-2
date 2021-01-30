console.log('starting node.js');

const fs = require('fs');
const { filter } = require('lodash');

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

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

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

module.exports = {
    addNode,
    getAll,
    getNode,
    removeNote
};