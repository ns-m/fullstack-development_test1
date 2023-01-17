const newPost = (post, addedAt = Date()) => {
    return {...post, addedAt}
}

console.log(newPost)


const myArray = [1, 2, 3, 4]
console.log(myArray)
console.log('-------------')

myArray.forEach(item => console.log(item * 2))
const newArray1 = myArray.forEach(item => item * 2)
const newArray2 = myArray.map(item => item * 3)
const newArray3 = myArray.map((item) => {return item * 3})
const newArray4 = myArray.map(function(item) {return item * 3})
console.log('-------------')

console.log(myArray)
console.log(myArray1)
console.log(myArray2)
console.log(myArray3)
console.log(myArray4)
console.log('-------------')

//destructurization of objects
const userAccount = {
    nameUser: 'Bruce',
    age: 34,
    authUser: true,
}

const {nameUser, age} = userAccount
const {authUser} = userAccount

console.log(nameUser)
console.log(age, authUser)
console.log('-------------')

//destructurization of arrays
const fruitArr = ['Apple', 'Orange', 'Banana']
const [fruit1, fruit2, fruit3] = fruitArr

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
console.log('-------------')

//destructurization of functions
const userProfile = {
    nameUserProfile: 'Bruce',
    commentsCount: 354,
    memberUser: true,
}

const userInfo = ({nameUserProfile, commentsCount}) => {
    if (!commentsCount) {
        return `User ${nameUserProfile} hasn\`t comments`
    }
    return `User ${nameUserProfile} has ${commentsCount} comments`
}

userInfo(userProfile)