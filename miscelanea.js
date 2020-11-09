/* setTimeout(   ()=>{ console.log('hola') }   , 2000)

const id = setInterval(()=>{console.log('%-%-%')}, 3000)

setTimeout(()=>{clearInterval(id)}, 10000)

const variable = function(){}
const variabl = ()=>{}
 */
const test = new Promise((resol, rejec)=>{
    resol()
    console.log('hola desde Promise')
})

test.then(()=>{
    console.log('hola desde then')
})