// Array de productos
const productos = [
  { nombre: "Coca", precio: 1000 },
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 1200 }
];

// Obtienene el botón del html por su id
const btnCalcular = document.getElementById("btnCalcular");

// Obtiene el resultado
const resultado = document.getElementById("resultado");

// Escucha el evento del click del boton
btnCalcular.addEventListener("click", () => {

// Agrega el precio del IVA usando map
const productosConIVA = productos.map(producto => ({
  nombre: producto.nombre,
  precioFinal: producto.precio * 1.21
}));
console.table(productosConIVA);


// Muestra el resultado en la tabla
resultado.innerHTML = `
    <table class="tabla-iva">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio Original</th>
                <th>Precio con IVA</th>
            </tr>
        </thead>
        <tbody>
            ${productos.map(producto => `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio.toFixed(2)}</td>
                    <td>$${(producto.precio * 1.21).toFixed(2)}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>
`;
});
