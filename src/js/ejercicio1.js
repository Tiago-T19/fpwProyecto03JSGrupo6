const listaEstudiantes = [];
const btnAgregar = document.querySelector('#btnAgregar');
const tablaCuerpo = document.querySelector('#tablaCuerpo');

btnAgregar.addEventListener('click', () => {
    const inputNombre = document.querySelector('#nombre');
    const inputApellido = document.querySelector('#apellido');
    const inputLibreta = document.querySelector('#libreta');
    const nombreVal = inputNombre.value.trim();
    const apellidoVal = inputApellido.value.trim();
    const libretaVal = inputLibreta.value.trim();

    if (!nombreVal || !apellidoVal || !libretaVal) {
        alert('Por favor complete todos los campos.');
        return;
    }

    listaEstudiantes.push({
        nombre: nombreVal,
        apellido: apellidoVal,
        libreta: libretaVal
    });

    const filasHTML = listaEstudiantes.map(estudiante => {
        return `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.apellido}</td>
                <td>${estudiante.libreta}</td>
            </tr>
        `;
    }).join(''); 
    tablaCuerpo.innerHTML = filasHTML;
    inputNombre.value = '';
    inputApellido.value = '';
    inputLibreta.value = '';
});