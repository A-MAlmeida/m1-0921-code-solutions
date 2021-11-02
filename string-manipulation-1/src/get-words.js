/* exported getWords */

function getWords(string) {

  var words = [];
  words = string.split(' ');
  if (words[0] === '') {
    return [];
  }
  return words;
}
