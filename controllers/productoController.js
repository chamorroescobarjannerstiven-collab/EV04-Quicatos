// Este controlador maneja la lógica de los servicios
exports.obtenerProductos = (req, res) => {
    res.json({ mensaje: "Lista de productos consultada con éxito" });
};

exports.crearProducto = (req, res) => {
    const nuevoProducto = req.body;
    res.status(201).json({ mensaje: "Producto creado con éxito", data: nuevoProducto });
};