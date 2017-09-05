// var obj = {
//     name: 'Cheryln'
// }
// var stringObj = JSON.stringify(obj)

// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name":"Cheryln", "age":43}'
var person = JSON.parse(personString)
console.log(typeof person);
console.log(person);

