/* const sumarCuadrados = function(a, b){
    
    const elevarAlCuadrado = function(a){
        const b = 0
        return a * a
    }

    return elevarAlCuadrado(a)+elevarAlCuadrado(b)

}

console.log(sumarCuadrados(1,2)) */


/* const calcular = function (a, b) {

    const sumar = function () {
        return a + b
    }

    const restar = function () {
        return a - b
    }

    return sumar
}

console.log(calcular(3, 4)()) */
//////////////////////////////////////////////////
/* // multiplicación
const multi = function (x, y) {
    return x * y
}
// división
const divi = function (x, y) {
    return x / y
}

const hacerNumeros = function (a, b, fun) {
    return fun(a, b)
}

console.log(hacerNumeros(6, 7, multi)) */

const arbolar = function (arbol = 'pino', numero = 2) {

    /* console.log('Plantar el arbol ' + arbol) */
    console.log(`Plantar el arbol ${arbol} ${numero} veces`)

}
arbolar('eucalipto')

/* 
// diferentes notaciones de funciones

function (a, b)  { 
    return a + b 
}

// arrow function
(a, b) => { 
    return a + b 
}

// arrow function abreviado si sólo hay un return
(a, b) => a + b
 */
const sumar_1 = function (a, b) {
    return a + b
}

const sumar_2 = (a, b) => {
    return a + b
}

const sumar_3 = (a, b) => a + b

const elevarAlCubo_1 = function (x) {
    return x * x * x
}
const elevarAlCubo_2 = (x) => {
    return x * x * x
}

const elevarAlCubo_3 = (x) => x * x * x

const elevarAlCubo_4 = x => x * x * x

console.log(elevarAlCubo_4(3))

console.log(sumar_1(1, 2))
console.log(sumar_2(1, 2))
console.log(sumar_3(1, 2))

// rest parameter

const adicionar = (cosa, ...cifras) => {
    let suma = 0
    cifras.forEach((cifra) => {
        suma = suma + cifra
    })
    console.log(`Hay ${suma} ${cosa}`)
}

adicionar('manzanas', 1, 3, 5, 7)

const deportistas = ['Koeman', 'Messi', 'Xavi', 'Ronaldo']

const imprimirEquipo = (entrenador, jugador1, jugador2, jugador3)=>{
    console.log(`Entrenador: ${entrenador}; jugadores: ${jugador1}, ${jugador2}, ${jugador3}.`)
}

imprimirEquipo(...deportistas)

////// Arrays

const [entrenador, ...jugadores] = deportistas
/* 
const entrenador = deportistas[0]
const jugadores = [ deportistas[1], deportistas[2], deportistas[3] ] 
*/
console.log(entrenador)
console.log(jugadores)

const deportistasCopia = [...deportistas]
const deportistasIncluyendoPedro = [...deportistas, 'Pedro']

///// Objeto

const programadorX = {
    nombre: 'Perico',
    email: 'perico@email.com'
}

const programadorY = {
    nombre: 'Alba',
    email: 'alba@email.com',
    github: 'http://github.com/progAlba'
}
// const {nombre, email, github='http://github.com/progX'} = programadorX
/* const nombre = programadorX.nombre
const email = programadorX.email
const github = programadorX.github */

const {nombre, email:correo, github='http://github.com/progX'} = programadorY
console.log(nombre)
console.log(correo)
console.log(github)
