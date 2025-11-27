const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/biblioteca-orm';

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      // Mongoose 
    });
    console.log('Conectado a MongoDB:', DB_URI); 
  } catch (err) {
    console.error(' Error conectando a MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;