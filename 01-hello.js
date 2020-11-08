const madera = 'haya'
const patas = 4
let altura = 22.5
const unidades = 'centímetros'
const esNueva = true

altura = 22.2

/* let x */


/* console.log(madera)
console.log(patas)
console.log(altura)
console.log(unidades)
console.log(esNueva)
console.log('---------------------------')
console.log(typeof madera)
console.log(typeof patas)
console.log(typeof altura)
console.log(typeof unidades)
console.log(typeof esNueva) */

/* console.log(x)
console.log(typeof x) */


/* {
    const madera = 'roble'
    console.log(madera)
}

console.log(madera) */


const calcularDiametroTronco = function (perimetro) {
    return perimetro / Math.PI
}

const diametro = calcularDiametroTronco(80)
console.log(diametro)

const suma = function (a, b) {
    return a + b
}

const resta = function (a, b) {
    return a - b
}
const multi = function (a, b) {
    return a * b
}
const divi = function (a, b) {
    return a / b
}
const modulo = function (a, b) {
    return a % b
}



const resultado = divi(4, 2)

console.log(divi(4, 2))



const concatenar = function (a, b) {
    return a + b
}

const print = function (a) {
    console.log(a)
}

print(concatenar('hola ', 'mundo'))

const describirMueble = function (fusta, autor) {
    let resultado = `Este mueble es de ${arguments[0]}. Y el autor es ${arguments[1]}. Por cierto, ${arguments[2]}`
    return resultado
}

console.log(describirMueble('aveto', 'Enrique Puig', 'hola'))

/* a=7
console.log(a)
const referenciar= function(a){
    a++
    console.log(a)
}
referenciar(a)
console.log(a) */

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- a -------')
console.log(a.push(5))
console.log(a)

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- b -------')
console.log(b.pop())
console.log(b)

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- c -------')
console.log(c.unshift(5))
console.log(c)

const d = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- d -------')
console.log(d.shift())
console.log(d)


const e = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- e -------')
console.log(e.splice(2, 2))
console.log(e)


const f = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- f -------')
console.log(f.slice(2, 4))
console.log(f)

