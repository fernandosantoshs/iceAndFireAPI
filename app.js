const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config')

const booksRoute = require('./routes/books');
const charactersRoute = require('./routes/characters');
const povCharactersRoute = require('./routes/povCharacters');

app.use('/books', booksRoute);
app.use('/characters', charactersRoute);
app.use('/povcharacters', povCharactersRoute);

mongoose.connect(process.env.DB_CONNECTION, () => { console.log('Conectado ao db!')});

app.get("/", (req, res) => {
    res.json({
      books: {
        "bookById": "/books/:id",
        "bookByISBN": "/books/isbn/:isbn",
    },
      characters: "/characters",
      povCharacters: "/povcharacters",
    });
  });


app.listen(3000);