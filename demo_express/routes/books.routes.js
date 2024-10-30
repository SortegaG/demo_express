const router = require('express').Router(); // Crea un objeto router
const booksController = require('../controllers/books.controller'); // Require importa un fichero de controller (funciones)

// CRUD --> CREATE, READ, UPDATE, DELETE

// Params:
// http://localhost:3000/api/books/quijote
// http://localhost:3000/books/
// http://localhost:3000/books/celestina

router.get("/:title?", booksController.getBook);

/*
{
    "title": "Don Quijote de la Mancha",
    "author":"Miguel de Cervantes",
    "pages": 2000,
    "year":1550,
    "description": "en un lugar de la mancha..."
}
*/
// POST http://localhost:3000/api/books
router.post("/", booksController.createBook);  // LLama a la funcion createBook del fichero importado booksController

// PUT http://localhost:3000/api/books
router.put("/",  booksController.editBook);

// DELETE http://localhost:3000/api/books/quijote
router.delete("/:title?", booksController.deleteBook);

module.exports = router; // Exporta el objeto router 