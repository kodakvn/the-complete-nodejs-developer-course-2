console.log('starting node.js');

var addNode = (title, body) => {
    console.log('adding note', title, body);
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