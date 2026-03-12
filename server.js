const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Importamos las rutas (las crearemos en un momento)
const productoRoutes = require('./routes/productoRoutes');

// Usamos las rutas
app.use('/api/productos', productoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});