console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var userInfo = os.userInfo();

// #1
fs.appendFile('greetings.txt', `hello ${userInfo.username}! You are ${notes.age}`, function (err) {
    if (err) {
        console.log('unable to write file');
    }
});

// #2
// fs.appendFileSync('greetings.txt', 'hello world new');