setTimeout(()=>{console.log('¡hola!')}, 3000)

const intervalID = setInterval(()=>{console.log('----')}, 3000)

setTimeout(()=>{
    clearInterval(intervalID)
    console.log('hasta la próxima')
}, 12000)

/* setTimeout(   ()=>{ console.log('hola') }   , 2000)

const id = setInterval(()=>{console.log('%-%-%')}, 3000)

setTimeout(()=>{clearInterval(id)}, 10000)

const variable = function(){}
const variabl = ()=>{}
 */
/* const test = new Promise((resol, rejec)=>{
    resol()
    console.log('hola desde Promise')
})

test.then(()=>{
    console.log('hola desde then')
}) */