const mongoose = require('mongoose');
const LibroSchema = new mongoose.Schema({
  titulo: { 
    type: String,
    required: true
  },
  editorial: { 
    type: String
  },
  id_autor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Autor', 
    required: true
  },
  id_genero: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Genero', 
    required: true
  }
},
{ 
  collection: 'libro', 
  timestamps: false 
}); 
module.exports = mongoose.model('Libro', LibroSchema);