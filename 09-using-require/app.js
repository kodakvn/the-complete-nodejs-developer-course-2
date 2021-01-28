console.log('starting app');

const fs = require('fs');
const os = require('os');

var userInfo = os.userInfo();

// #1
fs.appendFile('greetings.txt', `hello ${userInfo.username}`, function (err) {
    if (err) {
        console.log('unable to write file');
    }
});

// #2
// fs.appendFileSync('greetings.txt', 'hello world new');