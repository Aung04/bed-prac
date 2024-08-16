class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  
    // Method to create a new book
    static create(id, title, author) {
      return new Book(id, title, author);
    }
  
    // Method to read book details
    static read(book) {
      return `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`;
    }
  
    // Method to update book details
    static update(book, newTitle, newAuthor) {
      book.title = newTitle;
      book.author = newAuthor;
    }
  
    // Method to delete a book (not implemented in the class itself)
    static delete(book) {
      // In a real application, this would involve removing the book from a data store.
      // Here we just log a message for demonstration.
      console.log(`Book with ID ${book.id} has been deleted.`);
    }
  }
  
  module.exports = Book;
  