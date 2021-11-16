/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {

  var wordArray = [];

  for (var i = 0; i < words.length; i++) {
    wordArray.push(words[i] + suffix);
  }
  return wordArray;
}
