// Archivo: guardar-datos-formulario.js
let datos = {}
// Seleccionar el formulario
const formulario = document.getElementById('miFormulario');

// Seleccionar los campos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
  const datos = {
    nombre: nombreInput.value,
    email: emailInput.value,
    mensaje: mensajeInput.value
  };
  return datos;
}

// Función para guardar los datos (reemplazar con tu lógica de guardado)
function guardarDatos(datos) {
  // Ejemplo de guardado en consola (reemplazar con tu método de guardado real)
  console.log('Datos guardados:', datos);

  // Implementar la lógica para guardar los datos en una base de datos, archivo, API, etc.
}

// Evento para manejar el envío del formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  const datos = obtenerDatosFormulario();
  guardarDatos(datos);

  // Opcional: Limpiar el formulario
  formulario.reset();
});

// Evento para manejar el envío del formulario
formulario.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitar el envío por defecto del formulario

  const datos = obtenerDatosFormulario();

  try {
    const response = await fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      console.log('Datos enviados exitosamente.');
      formulario.reset(); // Limpiar el formulario
    }
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
});


// fetch('/api/comentarios', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(datos)
// })
// .then(response => response.json())
// .then(datos => {
//   console.log('Comentario creado:', datos);
//   // Actualizar la lista de comentarios
//   obtenerComentarios();
// })
// .catch(error => {
//   console.error('Error:', error);
// });


// function obtenerComentarios() {
// fetch('./api/comentarios')
// .then(response => response.json())
// .then(data => {
//   resultadosDiv.innerHTML = '';
//   data.forEach(comentario => {
//     const p = document.createElement('p');
//     p.textContent = `${comentario.nombre}: ${comentario.comentario}`;
//     resultadosDiv.appendChild(p);
//   });
// })
// .catch(error => {
//   console.error('Error:', error);
// });
// }

// // Llama a obtenerComentarios() al cargar la página para mostrar los comentarios iniciales
// obtenerComentarios();

