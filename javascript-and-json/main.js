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

console.log('books array value : ', books, 'typeof books: ', typeof books);

console.log('JSON books: ', JSON.stringify(books), 'typeof books: ', typeof books);
