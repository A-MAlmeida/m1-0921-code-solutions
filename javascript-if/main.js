/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {

  var result;

  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isEven(number) {

  var getEven;

  if (number % 2 === 0) {
    getEven = true;
  } else {
    getEven = false;
  }
  return getEven;
}

function startsWithJ(string) {

  var jay;

  if (string.charAt(0) === 'J') {
    jay = true;
  } else {
    jay = false;
  }
  return jay;
}

var andrew = {
  name: 'Andrew Michael Almeida',
  age: 29
};

function isOldEnoughToDrink(person) {

  var legal;
  if (person.age < 21) {
    legal = false;
  } else {
    legal = true;
  }
  return legal;
}

function isOldEnoughToDrive(person) {

  var legal;
  if (person.age >= 16) {
    legal = true;
  } else {
    legal = false;
  }
  return legal;
}

function isOldEnoughToDrinkAndDrive(person) {

  return false;

}

function categorizeAcidity(pH) {

  var acidity;

  if (pH === 7) {
    acidity = 'neutral';
  } else if (pH < 7) {
    acidity = 'acid';
  } else if (pH > 7 && pH <= 14) {
    acidity = 'base';
  } else {
    acidity = 'invalid pH level';
  }

  return acidity;
}

function introduceWarnerBro(name) {

  var greeting;

  if (name === 'yakko' || name === 'wakko') {
    greeting = "We're the warner brothers!";
  } else if (name === 'dot') {
    greeting = "I'm cute~";
  } else {
    greeting = 'Goodnight everybody!';
  }

  return greeting;
}
