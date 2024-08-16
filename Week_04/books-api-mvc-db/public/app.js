const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Static Middleware
app.use(express.static("public"));

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling

// Example route to handle API requests
app.get('/api/books', (req, res) => {
    // Example book data
    const books = [
        { title: "Book 1", author: "Author 1" },
        { title: "Book 2", author: "Author 2" },
        { title: "Book 3", author: "Author 3" }
    ];
    res.json(books);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
