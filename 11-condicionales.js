/* const edad = 19

if (edad >= 18) {
    console.log('se puede votar')
} else {
    console.log('no puedes votar')
} */

const dia = 0

/* if (dia === 0) {
    console.log('lunes')
} else if (dia === 1) {
    console.log('martes')
} else if (dia === 2) {
    console.log('miércoles')
} else if (dia === 3) {
    console.log('jueves')
} else if (dia === 4) {
    console.log('viernes')
} else if (dia === 5) {
    console.log('sábado')
} else if (dia === 6) {
    console.log('domingo')
} */

/* switch (dia) {
    case 0:
        console.log('lunes')
        break
    case 1:
        console.log('martes')
        break
    case 2:
        console.log('miércoles')
        break
    case 3:
        console.log('jueves')
        break
    case 4:
        console.log('viernes')
        break
    case 5:
    case 6:
        console.log('es fin de semana')
        break
    default:
        console.log('error')
        break;
} */

let i = 0
let text = ''
while (i < 10) {
    if (i === 7) {
        break
    }
    if (i === 5) {
        i++
        continue
    }
    text = text + ' ' + i // text = ' 0 1 2 3 4'
    i++ // i = i + 1
}
console.log(text)


let text2 = ''
for (let i = 10; i >= 0; i--) {  // i = i - 1
    text2 += ' ' + i
}
console.log(text2)

