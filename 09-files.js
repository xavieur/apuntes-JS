const fs = require('fs')

const MisNotas = [
    {titulo: 'truco de VSCode',
        cuerpo: 'usar snippets para todo'},
    { titulo: 'la función filter', cuerpo: 'genera un nuevo array según un criterio' },
    { titulo: 'la función map', cuerpo: 'genera un nuevo array a partir de otro' },
    { titulo: 'la función foreach', cuerpo: 'permite ejecutar código para cada elemento de un array' },
    { titulo: 'la función sort', cuerpo: 'ordena según un criterio cualquiera' }
]

const escribirNotas = (fichero, notas) => {
    const notasS = JSON.stringify(notas)
    fs.writeFile(fichero, notasS, (error) => {
        if (error) {
            console.log(error)
        }
    })
}

const leerNotas = (fichero) => {
    fs.readFile(fichero, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            const salida = JSON.parse(data)
            console.log(salida[0].cuerpo)
        }
    })
}

escribirDatosEnUnFichero('nota.json', MisNotas)
leerDatosDeUnFichero('nota.json')