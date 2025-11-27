const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');
// Rutas base: /genero
router.get('/', generoController.getAllGeneros);
router.post('/', generoController.createGenero);
// Rutas por ID: /genero/:id
router.get('/:id', generoController.getGeneroById);
router.put('/:id', generoController.updateGenero);
router.delete('/:id', generoController.deleteGenero);
module.exports = router;