// arrays
const arboles = ['pino', 'aveto', 'eucalipto']

// evita esto:
/* const arbol1 = 'pino'
const arbol2 = 'aveto'
const arbol3 = 'eucalipto' */

const cosas = ['lápiz', 22, true, { titulo: 'El Quijote', autor: 'Cervantes' }, function (a, b) { return a + b }, arboles]

/* 
console.log(arboles)
console.log(arboles[2]) // 'eucalipto' 
*/

/* 
console.log(cosas[5])
console.log(cosas[5][2])
 */

/*  console.log(typeof arboles)  // objeto */

// dimensión del array

/*  console.log(arboles.length)
 console.log(arboles.indexOf('melocotonero')) // -1 si no está
 console.log(arboles.includes('aveto')) */
// slice también funciona para strings

// convertir array en string
/* console.log(arboles.toString()) // separación por comas
console.log(arboles.join(' * ')) // separación arbitraria */
// convertir string en array
/* const texto = 'Cerezas;Peras;Manzanas;Uvas'
const frutas = texto.split(';')
console.log(frutas) */

// push, pop, unshift, shift, sort, concat
/* 
console.log(' --- a --- ')
console.log(arboles.push('Liquidambar styraciflua', 'Baobab'))
console.log(arboles)
console.log(' --- b --- ')
console.log(arboles.pop())
console.log(arboles)
console.log(' --- c --- ')
console.log(arboles.unshift('Liquidambar styraciflua', 'Baobab'))
console.log(arboles)
console.log(' --- d --- ')
console.log(arboles.shift())
console.log(arboles)
console.log(' --- e --- ')
const numeros = [7,3,2,8,1]
console.log(numeros.sort())
console.log(numeros)
console.log(' --- f --- ')
const arbolesMasNumeros = arboles.concat(numeros)
console.log(arbolesMasNumeros)
console.log(' --- g --- ')
console.log(arboles)
console.log(arboles.slice(2,4)) // [a,b)
console.log(arboles.slice(2)) // [a,hasta el final)
console.log(arboles) // no se rebana el array original
*/

arboles.forEach(
    function (arbol, indice) {
        console.log(`${indice + 1}. ${arbol}`)
    }
)


const tareas = [
    { asunto: 'hacer los deberes', completado: false },
    { asunto: 'Limpiar la habitación', completado: false },
    { asunto: 'beber agua', completado: true },
]

tareas.push({ asunto: 'hacer la compra', completado: false })

console.log(tareas.findIndex(
    function (tarea) {
        return tarea.completado === true
    }
))

const localizarTarea = function (lasTareas, elTexto) {
    return lasTareas.findIndex(function (laTarea) {
        return laTarea.asunto.toLowerCase() === elTexto.toLowerCase()
    })
}
console.log('localizarTarea: ', localizarTarea(tareas, 'beber Agua'))

const localizarTarea2 = function (lasTareas, elTexto) {
    return lasTareas.findIndex(function (laTarea) {
        return laTarea.asunto.toLowerCase().includes(elTexto.toLowerCase())
    })
}

console.log('localizarTarea2: ', localizarTarea2(tareas, 'Agua'))

const mostrarTarea = function (lasTareas, elTexto) {
    return lasTareas.find(function (laTarea) {
        return laTarea.asunto.toLowerCase() === elTexto.toLowerCase()
    })
}
console.log('encontrarTarea: ', mostrarTarea(tareas, 'beber Agua'))

// ordenar de mayor a menos
const numeros = [3,7,4,2]
console.log(numeros.sort(function(a,b){
    return b-a
}))

// splice : ensamblar

/* console.log('antes de splice', tareas)
console.log('salida de splice', tareas.splice(1, 2, { asunto: 'planchar', completado: false }))
console.log('después de splice', tareas) */

// filter

/* const mostrarTareasPendientes = function (lasTareas) {
    return lasTareas.filter(function (tarea) {
        return tarea.completado === false
    })
}

console.log('mostrarTareasPendientes: ', mostrarTareasPendientes(tareas))
 */
// map

/* const mostrarAsuntos = function (lasTareas) {
    return lasTareas.map(function (tarea) {
        return tarea.asunto
    })
}
console.log('mostrarAsuntos: ', mostrarAsuntos(tareas)) */

/* const ordenarAsuntos = function (lasTareas) {
    return lasTareas.sort(function (tareaA, tareaB) {
        if (tareaA.asunto.toLowerCase() < tareaB.asunto.toLowerCase()) {
            return -1
        } else if (tareaA.asunto.toLowerCase() > tareaB.asunto.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

console.log('ordenarAsuntos: ', ordenarAsuntos(tareas)) */

const ordenarTareasPendientesPrimero = function (lasTareas) {
    return lasTareas.sort(function (tareaA, tareaB) {
        if (tareaA.completado === false && tareaB.completado) {
            return -1
        } else if (tareaA.completado && !tareaB.completado) {
            return 1
        } else {
            return 0
        }
    })
}
console.log('ordenarTareasPendientesPrimero: ', ordenarTareasPendientesPrimero(tareas))

/*
const mostrarTareasPendientes = function (lasTareas) {
    return lasTareas.filter(function (tarea) {
        return tarea.completado === false
    })
}
console.log('mostrarTareasPendientes: ', mostrarTareasPendientes(tareas))

const mostrarAsuntosTareasPendientes = function (lasTareas) {
    return lasTareas.filter(function (tarea) {
        return tarea.completado === false
    }).map(function (tarea) {
        return tarea.asunto
    })
}
console.log('mostrarAsuntosTareasPendientes: ', mostrarAsuntosTareasPendientes(tareas))

const ordenarTareasPendientes = function (lasTareas) {
    return lasTareas.sort(
        function (tareaA, tareaB) {
            if (!tareaA.completado && tareaB.completado) {
                return -1
            } else if (tareaA.completado && !tareaB.completado) {
                return 1
            } else {
                return 0
            }
        }
    )
}

console.log(ordenarTareasPendientes(tareas))

 */