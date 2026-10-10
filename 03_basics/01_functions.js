
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
console.log(loginUserMessage())