console.log('starting node.js');

// module.exports.age = 25;
module.exports.addNode = () => {
    console.log('add note');
    return 'new note';
};

module.exports.addNode = (a, b) => {
    return a+b;
};