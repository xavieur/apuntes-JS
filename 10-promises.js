const callback = (error, data) => {
    if (error) {
        console.log('error: ', error)
    } else {
        console.log('data: ', data)
    }
}

/* const getDataCallback = (callback) => {
    setTimeout(() => {
        // callback('No se puede acceder al recurso', undefined)
        callback(null, 'Está soleado en Reus')

    }, 3000)
}

getDataCallback(callback)

const getDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('No se puede acceder al recurso')
        resolve('Está soleado en Reus')
    }, 3000)
})

getDataPromise
    .then((data) => { console.log('data desde promise: ', data) })
    .catch((err) => { console.log('error desde promise: ', err) }) */


const getDataCallbackDouble = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'string') {
            callback('La función necesita un número', undefined)
        } else {
            callback(null, num * 2)
        }
    }, 2000)
}

getDataCallbackDouble(2, callback)

const getDataPromiseDouble = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === 'string') {
                // callback('La función necesita un número', undefined)
                reject('La función necesita un número')
            } else {
                // callback(null, num * 2)
                resolve(num * 2)
            }
        }, 2000)
    })
}

getDataPromiseDouble(2).then((data) => {
    console.log('el doble es:', data)
}).catch((err) => {
    console.log('el error es:', err)
})







// callback

/* const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'this is data')
        // callback('error', undefined)
    }, 5000)
}

const callback = (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Data: ${data}`)
    }
}

getDataCallback(callback) */


//

/* const getDataCallbackWithNum = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('Number must be provided')
        }
    }, 2000)
}

getDataCallbackWithNum(2, callback) */



// promise
/*
const getDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is promise data') // only resolve or reject and only callable once and with one value
    }, 5000)
})

getDataPromise.then((data) => {
    console.log(`Data: ${data}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})
 */
/* getDataPromise.then((data) => {
    console.log(`Data: ${data}`)
}, (error) => {
    console.log(`Error: ${error}`)
})
 */
/*
const getDataPromiseWithNum = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})


getDataPromiseWithNum(3).then((data) => {
    console.log(`Data: ${data}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getDataPromiseWithNum(4).then((data) => {
    return getDataCallbackWithNum(data)
}).then((data)=>{
    console.log(`Data: ${data}`)
}).catch((error) => {
    console.log(`Error: ${error}`)
}) */