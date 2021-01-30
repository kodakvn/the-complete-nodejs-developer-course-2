// #1: object to json string
// var obj = {
//     name: 'kodak'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// #2: json string to object
// var personString = '{"name": "kodak", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// #3: challenge
const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
};

// #3.1: stringify
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');

// #3.2: parse
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);