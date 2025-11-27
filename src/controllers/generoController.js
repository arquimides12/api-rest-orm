const Genero = require('../models/genero'); // modelo Genero
// GET ALL GENEROS
exports.getAllGeneros = async (req, res) => {
  try {
    const generos = await Genero.find(); 
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: 'Error recibiendo generos', error: error.message });
  }
};
// GET GENERO BY ID
exports.getGeneroById = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findById(id); 
    if (!genero) {
      return res.status(404).json({ message: 'No se encontro el genero' });
    }
    res.status(200).json(genero);
  } catch (error) {
    res.status(500).json({ message: 'Error recibiendo genero', error: error.message });
  }
};
// Crear nuevo genero
exports.createGenero = async (req, res) => {
  try {
    const genero = await Genero.create(req.body); 
    res.status(201).json(genero);
  } catch (error) {
    res.status(400).json({ message: 'Error creando genero', error: error.message }); 
  }
};
// actualizar genero por id
exports.updateGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!genero) {
      return res.status(404).json({ message: 'No se encontro el genero' });
    }
    res.status(200).json(genero);
  } catch (error) {
    res.status(400).json({ message: 'Error actualizando genero', error: error.message });
  }
};
//  eliminar genero por id 
exports.deleteGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByIdAndDelete(id); 
    if (!genero) {
      return res.status(404).json({ message: 'No se encontro el genero' });
    }
    res.status(200).json({ message: 'Genero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando genero', error: error.message });
  }
};