// var obj = {
//     name: 'kodak'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "kodak", "age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);