function convertMinutesToSeconds(minutes) {

  var seconds = minutes * 60;

  return seconds;
}

var totalSeconds = convertMinutesToSeconds(11);

console.log('totalSeconds result:', totalSeconds);

function greet(name) {

  var greeting = ('Hey, ' + name);

  return greeting;
}

var greeting = greet('dude');

console.log('greet result: ', greeting);

function getArea(width, height) {

  var area = width * height;

  return area;
}

var area = getArea(23, 3);

console.log('getArea result: ' + area);

var person = { firstName: 'Andrew', lastName: 'Almeida' };
function getFirstName(person) {

  return person.firstName;

}

var firstName = getFirstName(person);

console.log('First Name: ', firstName);

var array = ['hey', "what's up,", 'hello'];

function getLastElement(array) {

  return (array[array.length - 1]);
}

var lastValue = getLastElement(array);

console.log('last value is: ' + lastValue);
