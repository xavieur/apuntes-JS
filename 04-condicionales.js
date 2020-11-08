/* const temperatura = 0

if(temperatura > 32){
    console.log('hace calor')
}

// se considera falso: false, 0, '', undefined, null, NaN
if (temperatura < 0) {   // (-infinito, 0)
    console.log('Hace demasiado frío')
} else if(temperatura <= 16){    //  [0, 16]
    console.log('Hace fresquito')
} else if(temperatura < 32 && temperatura > 16){  // (16,32)
    console.log('Me lo puedo pensar de salir')
} else {  // [32, infinito)
    console.log('Hace demasiado calor')
}
 */

const visitante = 'admin'

if(visitante==='admin' || visitante === 'user'){
    console.log('ok, puedes entrar en el sistema')
} else {
    console.log('acceso denegado')
}

const edad = 7
const mensaje = edad >= 18 ? 'sí, puedes votar' : 'no, no puedes votar'
// edad >=18 ? mensaje = 'sí, puedes votar': mensaje = 'no, no puedes votar'
console.log(mensaje)