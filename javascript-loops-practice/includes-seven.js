/* exported includesSeven */

function includesSeven(array) {

  var trueOrFalse = false;

  for (var i = 0; i <= array.length; i++) {
    if (array[i] === 7) {
      trueOrFalse = true;
      break;
    }
  }
  return trueOrFalse;
}
