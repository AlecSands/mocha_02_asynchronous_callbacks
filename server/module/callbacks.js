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

allFunctions.greeting = function (name) {
  return name;
};

allFunctions.processUserInput = function(callback) {
  var name = 'Alec';
  return callback(name);
};

allFunctions.simpleFunction = function(input) {
  var typeOfInput = typeof input;
  return typeOfInput;
};

module.exports = allFunctions;
