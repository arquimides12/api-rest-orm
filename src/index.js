const express = require('express');
const app = express();
const connectDB = require('./db'); 
// Importa todas las rutas
const autorRoutes = require('./routes/autor'); 
const generoRoutes = require('./routes/genero'); 
const libroRoutes = require('./routes/libro');   
// Middleware
app.use(express.json());
// Uso de Rutas
app.use('/autor', autorRoutes); 
app.use('/genero', generoRoutes); 
app.use('/libro', libroRoutes);   
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    // Conecta a MongoDB
    await connectDB(); 
    // Arranca el servidor Express
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
};
startServer();