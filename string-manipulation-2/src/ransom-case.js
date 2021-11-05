/* exported ransomCase */

function ransomCase(string) {

  for (var i; i <= string.length; i++) {
    if (i % 2 === 0) {
      string.charAt(i).toUpperCase();
    }
  } return string;
}
