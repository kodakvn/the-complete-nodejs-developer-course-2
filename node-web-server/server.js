const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send({
        name: 'kodak',
        likes: [
            'biking',
            'cities'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('about page');
});

// /bad - send back json with error message
app.get('/bad', (req, res) => {
    res.send({
        error: 'There is an error.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});