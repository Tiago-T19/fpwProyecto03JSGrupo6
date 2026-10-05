const colores = [
    '#05050a', 
    '#1a002c', // Púrpura oscuro
    '#001a2e', // Azul cibernético
    '#2b0018', // Rojo neón oscuro
    '#002b20', // Verde matriz
    '#1f1a00'  // Dorado oscuro
];

const btnCambiarColor = document.querySelector('#btnCambiarColor');

btnCambiarColor.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    const nuevoColor = colores[indiceAleatorio];
    document.body.style.backgroundColor = nuevoColor;
    console.log(`El color de fondo ha cambiado a: ${nuevoColor}`);
});