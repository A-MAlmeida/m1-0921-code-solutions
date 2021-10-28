/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {

  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen test: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty test: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeatWord test: ', repeatWord('hey', 10));

function logEachCharacter(string) {

  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log('logEachCharacterTest: ', logEachCharacter('supercalifragile'));

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i <= numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('doubleAll test: ', doubleAll([20, 13, 41, 20]));

var andrew = { fname: 'Andrew', lname: 'Almeida', age: 29 };

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('getKeys test: ', getKeys(andrew));

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);

  }
  return values;
}

console.log('getValues test: ', getValues(andrew));
