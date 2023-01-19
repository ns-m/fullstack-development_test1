const { resolve } = require("uri-js")

const testAsyncFun = async () => {
    return 'Success'
}

//console.log( testAsyncFun())
testAsyncFun().then(value => console.log(value))

const testAsyncFun2 = async () => {
    throw new Error('Error!!!')
}

testAsyncFun2()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))

const timerPromise = () => 
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(), 3000))

const testAsyncFun3 = async () => {
    console.log('Timer start')
    const startTime = performance.now();
    await timerPromise()
    const endTime = performance.now();
    console.log('Timer finished', endTime - startTime)
}

testAsyncFun3()
testAsyncFun3()
testAsyncFun3()