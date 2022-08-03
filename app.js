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
        "bookById": "https://iceAndFireAPI.fernandosantos2.repl.co/books/:id",
        "bookByISBN": "https://iceAndFireAPI.fernandosantos2.repl.co/books/isbn/:isbn",
    },
      characters: "https://iceAndFireAPI.fernandosantos2.repl.co/characters",
      povCharacters: "https://iceAndFireAPI.fernandosantos2.repl.co/povcharacters",
    });
  });


app.listen(3000);