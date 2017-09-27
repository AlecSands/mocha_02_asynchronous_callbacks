function basicCallback (string, callback) {
  var type = '';
  if (typeof string == 'string') {
    type = true;
  } else {
    type = false;
  }
  callback(type);
}

function returnOutcome (response) {
  if (response == true) {
    return "correct";
  } else if (response == false) {
    return "not correct";
  } else {
    return TypeError('expected a boolean');
  }
}


module.exports = basicCallback;
