//arreglo de objetos base
const peliculas = [
  { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
  { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
  { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
  { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 }
];

//se obtiene los elementos del DOM
const filtroGenero = document.getElementById("filtroGenero");
const btnFiltrar = document.getElementById("btnFiltrar");
const listaPeliculas = document.getElementById("listaPeliculas");

//escucha el click en el botón
btnFiltrar.addEventListener("click", function() {
    //limpia la lista previa para no duplicar elementos en pantalla
    listaPeliculas.innerHTML = "";

    //obtiene el valor actual seleccionado en el <select>
    const generoSeleccionado = filtroGenero.value;

    //definir la lista a mostrar según la opción elegida
    let peliculasFiltradas = [];

    if (generoSeleccionado === "todos") {
        peliculasFiltradas = peliculas;
    } else {
        peliculasFiltradas = peliculas.filter(function(pelicula) {
            return pelicula.genero === generoSeleccionado;
        });
    }

    //mostrar el resultado en el DOM usando forEach
    peliculasFiltradas.forEach(function(pelicula) {
        //crear un nuevo nodo <li>
        const item = document.createElement("li");
        
        //asignar el contenido de texto con los datos de la película
        item.textContent = `${pelicula.titulo} - Género: ${pelicula.genero} (Puntaje: ${pelicula.puntaje})`;
        
        //agregar el <li> como hijo dentro del <ul>
        listaPeliculas.appendChild(item);
    });
});