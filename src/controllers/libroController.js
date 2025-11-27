const Libro = require('../models/libro');
const Autor = require('../models/autor');
const Genero = require('../models/genero');
const populateOptions = [
    { path: 'id_autor', select: 'nombre nacionalidad' },
    { path: 'id_genero', select: 'nombre descripcion' }
];
// GET ALL LIBROS
exports.getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.find().populate(populateOptions); // Mongoose: populate
        res.status(200).json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error recibiendo libros', error: error.message });
    }
};
// GET LIBRO BY ID
exports.getLibroById = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findById(id).populate(populateOptions); // Mongoose: populate
        if (!libro) {
            return res.status(404).json({ message: `Libro con id:${id} no encontrado` });
        }
        res.status(200).json(libro);
    } catch (error) {
        res.status(500).json({ message: 'Error recibiendo libro', error: error.message });
    }
};
// GET LIBROS BY GENERO (ruta extra de tu ejemplo)
exports.getLibrosByGenero = async (req, res) => {
    try {
        const { id_genero } = req.params;
        const libros = await Libro.find({ id_genero: id_genero }).populate(populateOptions);

        if (libros.length === 0) {
            return res.status(404).json({ message: 'No se encontraron libros para ese genero' });
        }
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: 'Error recibiendo libros por genero', error: error.message });
    }
};
// CREATE NEW LIBRO
exports.createLibro = async (req, res) => {
    try {
        const { id_autor, id_genero } = req.body;

        const autor = await Autor.findById(id_autor);
        if(!autor) return res.status(404).json({ message: `No existe el autor para el id:${id_autor}`});
        
        const genero = await Genero.findById(id_genero);
        if(!genero) return res.status(404).json({ message: `No existe el genero para el id:${id_genero}`});

        const libro = await Libro.create(req.body);
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ message: 'Error creando libro', error: error.message });
    }
};
// UPDATE LIBRO
exports.updateLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_autor, id_genero } = req.body;

        // Validar si el libro existe primero
        const libro_pre = await Libro.findById(id);
        if(!libro_pre) return res.status(404).json({ message: `No existe el libro para el id:${id}`});

        // Validar referencias si se intentan actualizar
        if(id_autor) {
            const autor = await Autor.findById(id_autor);
            if(!autor) return res.status(404).json({ message: `No existe el autor para el id:${id_autor}`});
        }
        if(id_genero) {
            const genero = await Genero.findById(id_genero);
            if(!genero) return res.status(404).json({ message: `No existe el genero para el id:${id_genero}`});
        }

        const libro = await Libro.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        res.status(201).json(libro);
    } catch (error) {
        res.status(400).json({ message: 'Error actualizando libro', error: error.message });
    }
};
// DELETE LIBRO POR ID
exports.deleteLibro = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await Libro.findByIdAndDelete(id);
        if (!libro) {
            return res.status(404).json({ message: 'No se encontro el libro' });
        }
        res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error eliminando libro', error: error.message });
    }
};