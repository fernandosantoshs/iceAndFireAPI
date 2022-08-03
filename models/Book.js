const mongoose = require("mongoose");

const Book = mongoose.model("books", {
    url: String,
    name: String,
    isbn: String,
    authors: [String],
    numberOfPages: Number,
    publisher: String,
    country: String,
    mediaType: String,
    released: Date,
    characters: [String],
    povCharacters: [String],
    bookCover: String
});

module.exports = Book;