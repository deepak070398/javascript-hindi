// Primitive

// 7 types: : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 42353454365456345n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shakiman", "naagraj", "doga"]
let myObj = {
    name: "deepak",
    age: 28
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "deepakisguru"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "deepak@google.com"

console.log(userOne.email);
console.log(userTwo.email);
