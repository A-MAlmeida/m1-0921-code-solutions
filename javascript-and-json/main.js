var books = [

  {
    isbn: '9780316196956',
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },

  {
    isbn: '9783112418796',
    title: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzche'
  },

  {
    isbn: '9780679420323',
    title: 'The Interpretation of Dreams',
    author: 'Sigmund Freud'
  }
];

console.log('books array value : ', books);
console.log('typeof books: ', typeof books);

var booksJSON = JSON.stringify(books);

console.log('value of booksJSON: ', booksJSON);
console.log('typeof booksJSON: ', typeof booksJSON);

var studentJSON = '{"id": 1, "name": "Andrew Almeida"}';

console.log('value of studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
