const { createApp } = Vue
createApp({
 data() {
 return {
 saludo: 'Hola a Todos!!!',
 nombre: 'Kevin',
 apellido:'Aballay',
 provincia:'San Juan',
 edad: '31',
 tecnologias:['HTML', 'CSS', 'JAVASCRIPT', 'PYTHON','MYSQL','VUE','GIT','GITHub','FAMEWORK ASTRO']
 }
 }
}).mount('#app')