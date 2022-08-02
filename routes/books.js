const express = require('express');
const router = express.Router();
const Book = require('../models/Book');


// Routes
router.get('/', async (req,res) => {
    try {
        const books = await Book.find()
        res.json(books);

    } catch(err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req,res) => {
    try {
        const books = await Book.find({})
        const id = req.params.id;

        const book = books.map((item) => {
            //Função para retirar os characters da 'url' do livro e retornar apenas o número do livro.
            if (item.url.split("").filter(n => (Number(n) || n == 0)).join("") == id) {
               return item
            };
        });

        if(!book) {
            res.send('Livro não encontrado');
        }
        
        res.json(book);        

    } catch(err) {
        res.json({message: err});
    }
});

router.get('/isbn/:isbn', async (req, res) => {      
    try {
      const isbn = req.params.isbn;
      const book = await Book.find({
        isbn: isbn
      });

      res.json(book);

    } catch(err) {
        res.json({message: err});
    }
  });
  

module.exports = router;