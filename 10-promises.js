// callback

const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'this is data')
    }, 5000)
}

const callback = (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Data: ${data}`)
    }
}

getDataCallback(callback)


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