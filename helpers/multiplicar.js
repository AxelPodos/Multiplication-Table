// File system es el manejo de archivos propio de node. Asi es como se requiere para usar el paquete
const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta) => {

    try {

        let salida = ''
        
        for (let i = 1; i <= hasta; i++) {
            salida += (`${ base } X ${ i } = ${base * i}\n`)
        }
        
        if (listar) {
            console.log('====================='.rainbow)
            console.log('    Tabla del:'.rainbow, colors.blue(base))
            console.log('====================='.rainbow)
            console.log(salida)
        }
    
        // Grabado de archivo. Recibe posibles argumentos: Path - Nombre archivo - Archivo - Callback para manejar error en el guardado
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida )
            
        return (`tabla-${ base }.txt creado con exito!!`)
    
    } catch (error) {
        throw error
    }
}

// De esta forma exportamos un objeto en node
module.exports = {
    crearArchivo
}