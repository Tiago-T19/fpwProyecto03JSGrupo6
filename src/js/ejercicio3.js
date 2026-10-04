const productos = [

  { nombre: "Coca", precio: 1000 },
  { nombre: "Pan", precio: 500 },
  { nombre: "Leche", precio: 1200 }
  
];

const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

   btnCalcular.addEventListener("click", () => {
const productosConIVA = productos.map(producto => ({
  nombre: producto.nombre,
  precioFinal: producto.precio * 1.21
}));

resultado.innerHTML = productosConIVA
.map(producto => `<p>${producto.nombre}: $${producto.precioFinal}</p>`)
.join("");
});
