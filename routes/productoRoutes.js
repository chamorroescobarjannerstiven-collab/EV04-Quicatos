const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController');

// Documentación básica de servicios:
// GET /api/productos - Obtiene la lista de productos
// POST /api/productos - Crea un nuevo producto
router.get('/', controller.obtenerProductos);
router.post('/', controller.crearProducto);

module.exports = router;