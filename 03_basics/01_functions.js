
function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// sayMyName()

// function addtwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addtwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addtwoNumbers(3, 5)

// console.log("result: ", result);

function loginUserMessage(userName = "Sam"){
    if(!userName) {
        console.log("Please enter a username");
        return
    } 
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Deepak"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Deepak",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
