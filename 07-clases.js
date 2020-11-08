const Persona = function (nombre, email) {
    this.nombre = nombre
    this.email = email
}

Persona.prototype.mostrarTodo = function () {
    return `Persona: ${this.nombre} ${this.email}`
}

class Persona2 {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }
    mostrarTodo() {
        return `Persona: ${this.nombre} ${this.email}`
    }
}



const personaA = new Persona('Perico', 'perico@mail.com')
const personaB = new Persona('Annie', 'annie@mail.com')

console.log(personaA.nombre)
console.log(personaB.mostrarTodo())

const juguete = 'peonza'
const juguet = new String('peonza')
const juguetes = ['pelota', 'ajedrez', 'parchís']
const juguets = new Array('pelota', 'ajedrez', 'parchís')

class Animal {
    constructor(nombreDelAnimal, familiaDelAnimal) {
        this.nombre = nombreDelAnimal
        this.familia = familiaDelAnimal
    }
    mostrarTodo() {
        return `Animal: ${this.nombre} pertenece a los ${this.familia}`
    }
}

const gorilaCopito = new Animal('Copito', 'homínidos')
const leonRey = new Animal('Rey', 'felinos')

console.log(gorilaCopito.mostrarTodo())

class Perro extends Animal {
    constructor(nombreDelAnimal, familiaDelAnimal, raza, comidas) {
        super(nombreDelAnimal, familiaDelAnimal)
        this.raza = raza
        this.comidas = comidas
    }
    mostrarLoQueComer() {
        return this.comidas.join(', ')
    }
    consultarSiLeGustaAlgo(algo) {
        if (this.comidas.findIndex(function (comida) {
            return comida === algo
        }) > -1) {
            return true
        } else {
            return false
        }
    }

    consultarSiLeGustaAlgo2(algo) {
        if (this.comidas.find(function (comida) {
            return comida === algo
        })) {
            return true
        } else {
            return false
        }
    }
    consultarSiLeGustaAlgo3(algo){
        return this.comidas.includes(algo)
    }
    escribirLasComidasConNumeros(){
/* 
        const hacerParaCadaComida=(comida, indice)=>{
            console.log(`${indice+1}. ${comida}`)
        }
        
        this.comidas.forEach(hacerParaCadaComida)

        ['codillo', 'chuletón', 'jamón del bueno'].forEach(hacerParaCadaComida)
        caso 0::::  hacerParaCadaComida('codillo', 0)
        caso 1::::  hacerParaCadaComida('chuletón', 1)
        caso 2::::  hacerParaCadaComida('jamón del bueno', 2)

        let algo = 'hueso'
        const verificarSiEsAlgo =function(comida){
            return comida === algo
        }

        this.comidas.findIndex(verificarSiEsAlgo)
        ['codillo', 'chuletón', 'jamón del bueno'].findIndex(verificarSiEsAlgo)
        caso 0::::  verificarSiEsAlgo('codillo', 0) -> false y continuamos
        caso 1::::  verificarSiEsAlgo('chuletón', 1) -> false y continuamos
        caso 2::::  verificarSiEsAlgo('jamón del bueno', 2) false -> devuelve -1


        let algo = 'chuletón'
        const verificarSiEsAlgo =function(comida){
            return comida === algo
        }
        this.comidas.findIndex(verificarSiEsAlgo)
        ['codillo', 'chuletón', 'jamón del bueno'].findIndex(verificarSiEsAlgo)
        caso 0::::  verificarSiEsAlgo('codillo', 0) -> false y continuamos
        caso 1::::  verificarSiEsAlgo('chuletón', 1) -> true -> devuelve el indice
        caso 2::::  verificarSiEsAlgo('jamón del bueno', 2) 
 */

        this.comidas.forEach((comida, indice) => {
            debugger
            console.log(`${indice+1}. ${comida}`)
        };
    }
}

const perroTommy = new Perro('Tommy', 'cánidos', 'pancho', ['codillo', 'chuletón', 'jamón del bueno'])
const perroChispa = new Perro('Chispa', 'cánidos', 'beagle', ['lechugas', 'verduras'])

console.log(perroTommy.nombre)
console.log(perroTommy.familia)
console.log(perroTommy.raza)
console.log(perroTommy.mostrarLoQueComer())
console.log(perroTommy.consultarSiLeGustaAlgo3('hueso'))
perroTommy.escribirLasComidasConNumeros()

