# My Ice And Fire API

* API desenvolvida em desafio, retornar os dados principais dos livros e personagens da séria Ice and Fire Cronicles.
* Esta API consome dados de uma instância sandbox do MongoDB.

## Rotas :
"/books/:id" : Retorna os dados de todos os livros da saga com a capa do livro(base64). ex: /books/1;
"books/isbn/:isbn" : Retorna os dados de um livro pelo ISBN. ex: /books/isbn/978-0553103540;
"/characters" : Retorna os dados dos personagens de Game of Thrones;
"/povcharacters" : Retorna os dados de todos os principais personagens;

## Repl.it repositorie
https://replit.com/@FernandoSantos2/iceAndFireAPI?v=1
