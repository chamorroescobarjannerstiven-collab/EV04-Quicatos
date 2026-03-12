exports.obtenerProductos = (req, res) => {
    const inventario = [
        { id: 1, articulo: "Piñata de Tambor", precio: 35000 },
        { id: 2, articulo: "Carro a Control Remoto", precio: 55000 },
        { id: 3, articulo: "Set de Globos", precio: 12000 }
    ];
    
    res.json({
        mensaje: "Inventario de Mis Quicatos consultado con éxito",
        datos: inventario
    });
};

exports.crearProducto = (req, res) => {
    res.json({ 
        mensaje: "Producto creado con éxito en Mis Quicatos" 
    });
};