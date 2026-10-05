// Servicios
import {obtenerProductosEnStock,obtenerPrecios,calcularTotal,generarTabla} from "../services/servicesEj5.js";

//Array del carrito
const carrito = [
  { producto: "Notebook", precio: 800000, enStock: true },
  { producto: "Mouse", precio: 15000, enStock: false },
  { producto: "Teclado", precio: 30000, enStock: true },
  { producto: "Monitor", precio: 200000, enStock: true }
]; 
// Elementos HTML
const total = document.querySelector("#total");
const detalle = document.querySelector("#detalle");
const btnTotal = document.querySelector("#btnTotal");

// Evento click
btnTotal.addEventListener("click", () => {

    // Paso 1
    const productosEnStock =
        obtenerProductosEnStock(carrito);

    console.table(productosEnStock);

    // Paso 2
    const precios =
        obtenerPrecios(productosEnStock);

    console.log(precios);

    // Paso 3
    const totalPagar =
        calcularTotal(precios);

    console.log(totalPagar);

    // Mostrar resultados
    total.textContent =
        `Total: $${totalPagar.toLocaleString("es-AR")}`;

    detalle.textContent =
        `Se compraron ${productosEnStock.length} productos.`;

    // Generar y mostrar la tabla
    const tabla = generarTabla(productosEnStock);
    document.querySelector("#tablaProductos").innerHTML = tabla;
});