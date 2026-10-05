// Filtra sólo los productos disponibles
export const obtenerProductosEnStock = (carrito) => {
    return carrito.filter(
        producto => producto.enStock === true
    );
};

// Obtiene únicamente los precios
export const obtenerPrecios = (productos) => {
    return productos.map(
        producto => producto.precio
    );
};

// Calcula el total
export const calcularTotal = (precios) => {
    return precios.reduce(
        (acumulador, precio) => acumulador + precio,
        0
    );
};

// Generar la tabla HTML
export const generarTabla = (productos) => {

    return `
        <table class="tabla-carrito">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                ${productos.map(producto => `
                    <tr>
                        <td>${producto.producto}</td>
                        <td>$${producto.precio.toLocaleString("es-AR")}</td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
};