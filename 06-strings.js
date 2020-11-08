const saludo = '¡Hola Mundo!'

console.log(saludo[0])

console.log(saludo.toLowerCase())
console.log(saludo.toUpperCase())

// trim
const email = ' perico@gmail.com    '
console.log(email.trim())

// metodos homónimos a los de los arrays

console.log(saludo.length)
console.log(saludo.indexOf('ñ'))

if(saludo.indexOf('ñ') > -1){ // devuelve el índice o -1
    console.log('saludo contiene la eñe')
} else {
    console.log('saludo no contiene la eñe')
}

if(saludo.includes('ñ')){  // devuelve true o false
    console.log('incluye la eñe')
} else {
    console.log('no la incluye la eñe')
}


console.log(saludo.slice(1, saludo.length-1))
