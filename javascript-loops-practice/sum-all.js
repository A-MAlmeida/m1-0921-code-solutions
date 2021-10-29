/* exported sumAll */

function sumAll(numbers) {

  var x = 0;

  for (var i = 0; i <= numbers.length - 1; i++) {
    x += numbers[i];
  }
  return x;
}
