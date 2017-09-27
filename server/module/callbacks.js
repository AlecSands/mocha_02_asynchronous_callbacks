allFunctions = {};

// function basicCallback (string, callback) {
//   var type = '';
//   if (typeof string == 'string') {
//     type = true;
//   } else {
//     type = false;
//   }
//   callback(type);
// }
//
// function returnOutcome (response) {
//   if (response == true) {
//     return "correct";
//   } else if (response == false) {
//     return "not correct";
//   } else {
//     return TypeError('expected a boolean');
//   }
// }
//
// allFunctions.greeting = function (name) {
//   alert('Hello ' + name);
// };
//
// allFunctions.processUserInput = function(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// };
//
// allFunctions.processUserInput(greeting);

allFunctions.simpleFunction = function(input) {
  var typeOfInput = typeof input;
  return typeOfInput;
};

module.exports = allFunctions;
