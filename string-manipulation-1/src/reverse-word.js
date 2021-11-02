/* exported reverseWord */

function reverseWord(word) {

  var revString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    revString += word[i];
  }
  return revString;
}
