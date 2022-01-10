/* Para verlo escribir en consola: 
   - node .\app.js 
   - node .\app.js -b={aca cualquier number} -l={si la escribimos, se lista la tabla, sino no la lista} */

/* Exportamos NPM YARGS, para manejar argumentos en consola. 
   - OPTION: elemento bandera 
   - ALIAS: representacion
   - TYPE: tipo 
   - DEMANDOPTION: si o si espera ese tipo 
   - CHECK: validador 
   - DESCRIBE: descripcion del argumento en consola*/
   const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicacion'
            })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
            })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Ultimo valor que multiplica a la base'
        })    
        .check( (argv, options) => {
            if (isNaN(argv.b)) {
                throw 'La base tiene que ser un numero'
            }
            return true
        })        
        .argv   

module.exports = argv