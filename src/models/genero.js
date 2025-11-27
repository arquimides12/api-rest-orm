// src/models/genero.js
const mongoose = require('mongoose');
const GeneroSchema = new mongoose.Schema({
  nombre: { 
    type: String,
    required: true,
    unique: true 
  },
  descripcion: { 
    type: String,
    allowNull: true
  }
},
{ 
  collection: 'genero', 
  timestamps: false 
}); 
module.exports = mongoose.model('Genero',
   GeneroSchema);