const express = require("express");
const router = express.Router();
const libroController = require("../controllers/libroController")
// Rutas base: /libro
router.get('/', libroController.getAllLibros);
router.post('/', libroController.createLibro);
// Rutas especiales: /libro/genero/:id_genero
router.get('/genero/:id_genero', libroController.getLibrosByGenero);
// Rutas por ID: /libro/:id
router.get('/:id', libroController.getLibroById);
router.put('/:id', libroController.updateLibro);
router.delete('/:id', libroController.deleteLibro);

module.exports = router;