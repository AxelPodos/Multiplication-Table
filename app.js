
// De esta forma importamos un objeto en node
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

// Clear es para limpiar la consola cada vez que se ejecuta
console.clear()

console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log((nombreArchivo.green)))
    .catch( err => console.log(err))  
   

