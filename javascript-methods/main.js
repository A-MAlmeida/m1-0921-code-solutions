var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);

console.log('largest number is: ', maximumValue);

var heroes = [
  'Iron-Man',
  'Spiderman',
  'Cable',
  'Thanos'
];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random test: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random hero? ', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },

  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  },

  {
    title: 'Lord of the Rings',
    author: 'JRR Tolkien'
  }
];

var lastBook = library.pop();

console.log('Value of last book', lastBook);

var firstBook = library.shift();

console.log('Value of first book: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library array: ', library);

var fullName = 'Andrew' + ' ' + 'Almeida';

var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('valueofSayMyName: ' + sayMyName);
