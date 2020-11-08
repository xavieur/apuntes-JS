const muebleA = {
    madera: 'roble',
    altura: 22.2,
    color: 'marrón',
    precio: 399,
    esNueva: true
}
const muebleB = {
    madera: 'pino',
    altura: 20.2,
    color: 'blanco',
    precio: 199,
    esNueva: false
}

// acceso y edición de objetos

/* console.log(muebleA)
console.log(muebleA.esNueva)
console.log(muebleA['madera']) */

/* const describirMueble = function(mueble){
     return `Este mueble es de color ${mueble.color} y vale ${mueble.precio}`
}
console.log(describirMueble(muebleA)) */

console.log('antes', muebleA)
muebleA.precyo = 500
console.log('después', muebleA)
delete muebleA.precyo
console.log('después de todo', muebleA)

muebleA.barnizar = function(color){
    console.log(`pintar el mueble de ${color}`)
}
console.log(muebleA)

// se copian las referencias cuando se copian objetos
// muebleC es un sinónimo de muebleA

const muebleC = muebleA
console.log('antes', muebleC)
muebleA.color = 'lila'
console.log('después C', muebleC)
console.log('después A', muebleA)

// objeto como parámetro de una función
// por lo de arriba, se pasa por referencia
// los cambios hechos en el objeto son persistentes

/* const aplicarDescuento = function (mueble, descuento) {
    mueble.precio = mueble.precio - descuento
}

console.log('antes del descuento', muebleB)
aplicarDescuento(muebleB, 10)
console.log('después del descuento', muebleB) */

const libroA = {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    paginas: 100,
    precio: 15.99
}

const libroB = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes Saavedra',
    paginas: 1000,
    precio: 25.99
}

// una función que además devuelve un objeto

/* const describir = function (libro) {
    return {
        versionCorta: `${libro.titulo} de ${libro.autor}`,
        versionLarga: `${libro.titulo} de ${libro.autor} tiene ${libro.paginas} páginas y vale ${libro.precio} €`
    }
}

console.log(describir(libroA))
console.log(describir(libroA).versionCorta)
console.log(describir(libroB).versionLarga) */

// un objeto con miembros pasivos y activos, propiedades y métodos (esto es, funciones)

const restauranteA = {
    nombre: 'El celler de can Roca',
    capacidad: 100,
    ocupacion: 75,
    entrar: function(visitantes){
        /* restauranteA.ocupacion = restauranteA.ocupacion + visitantes */
        this.ocupacion = this.ocupacion + visitantes
    },
    salir(visitantes){
        this.ocupacion = this.ocupacion - visitantes
    },
    verDisponibilidad: function(visitantes){
        return this.capacidad - this.ocupacion - visitantes
    }
}

/* console.log('antes', restauranteA)
restauranteA.entrar(2)
console.log('después de entrar', restauranteA)
restauranteA.salir(7)
console.log('después de salir', restauranteA)

console.log(restauranteA.verDisponibilidad(25))
 */