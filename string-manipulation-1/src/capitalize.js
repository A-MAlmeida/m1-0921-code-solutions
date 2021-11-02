/* exported capitalize */

function capitalize(word) {

  var cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  return cap;

}
