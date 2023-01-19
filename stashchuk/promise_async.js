//promise => async

const { resolve } = require("uri-js")
 
// const getDataPtoA = async(url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }
const url = 'https://jsonplaceholder.typicode.com/todos/55'

async function getDataPtoA(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

//this code for browser

try {
    const resultData = await getDataPtoA(url)
    console.log(resultData)
} catch (error) {
    console.log(error.message)
}
//export default getDataPtoA