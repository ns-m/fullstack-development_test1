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
console.log(newArray1)
console.log(newArray2)
console.log(newArray3)
console.log(newArray4)
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

console.log(userInfo(userProfile))
console.log('-------------')

const sumPositiveNumbers = (a, b) => {
    if (typeof a != 'number' || typeof b != 'number') {
        return 'One or two arguments is not a number!'
    }else if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b
}

console.log(sumPositiveNumbers('abc', true));
console.log(sumPositiveNumbers(9, -2));
console.log(sumPositiveNumbers(99, 1));
console.log('-------------')

//ternary operator
let valueTO = 10
console.log(valueTO >= 0 ? valueTO : -valueTO);

valueTO = -3
const resultTO = valueTO >= 0 ? valueTO : -valueTO;
console.log(resultTO);
console.log('-------------')

