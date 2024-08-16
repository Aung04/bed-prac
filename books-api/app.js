const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port =3000;

let books = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
];

// Parse incoming JSON data in requests
app.use(express.json());

// Configure body-parser to handle URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route for getting all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Route for creating a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Route for getting a single book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(book => book.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Route for updating a book by ID
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    updatedBook.id = bookId;
    books[bookIndex] = updatedBook;
    res.json(updatedBook);
  } else {
    res.status(404).send('Book not found');
  }
});

// Route for deleting a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  const bookIndex = books.findIndex(book => book.id === bookId);

  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});





