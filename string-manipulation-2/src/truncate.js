/* exported truncate */

function truncate(length, string) {

  var newWord;

  newWord = string.slice(0, length);
  newWord += '...';

  return newWord;
}
