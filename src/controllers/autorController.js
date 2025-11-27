const Autor = require('../models/autor'); 
// Obtener autores (GET /)
exports.getAllAutors = async (req, res) => {
  try {
    const autors = await Autor.find(); 
    res.status(200).json(autors);
  } catch (err) {
    res.status(500).json({ message: 'Error recibiendo autores', error: err.message });
  }
};
// Crear un nuevo autor (POST /)
exports.createAutor = async (req, res) => {
  try {
    const newAutor = await Autor.create(req.body); 
    res.status(201).json(newAutor); 
  } catch (err) {
    res.status(400).json({ message: 'Error creando autor, verifique los datos', error: err.message }); 
  }
};
// Obtener autor por ID (GET /:id)
exports.getAutorById = async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.status(200).json(autor);
    } catch (err) {
        res.status(500).json({ message: 'Error al buscar autor', error: err.message });
    }
};
//Actualizar autor por ID (PUT /:id)
exports.updateAutor = async (req, res) => {
    try {
        const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!autor) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.status(200).json(autor);
    } catch (err) {
        res.status(400).json({ message: 'Error actualizando autor', error: err.message });
    }
};
// Eliminar autor por ID (DELETE /:id)
exports.deleteAutor = async (req, res) => {
    try {
        const autor = await Autor.findByIdAndDelete(req.params.id);
        if (!autor) {
            return res.status(404).json({ message: 'Autor no encontrado' });
        }
        res.status(200).json({ message: 'Autor eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error eliminando autor', error: err.message });
    }
};