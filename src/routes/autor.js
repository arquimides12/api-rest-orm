const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController'); 
// Rutas base: /autor
router.get('/', autorController.getAllAutors);
router.post('/', autorController.createAutor);
// Rutas por ID: /autor/:id
router.get('/:id', autorController.getAutorById);
router.put('/:id', autorController.updateAutor);
router.delete('/:id', autorController.deleteAutor);
module.exports = router;