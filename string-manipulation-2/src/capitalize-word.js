/* exported capitalizeWord */

function capitalizeWord(word) {

  var newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (newWord === 'JavaScript') {
    return 'JavaScript';
  }
  return newWord;
}
