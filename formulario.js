// Archivo: guardar-datos-formulario.js

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