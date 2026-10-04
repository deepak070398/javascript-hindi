// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Deepak",
    "full name": "Deepak Kumar",
    [mySym]: "myKey1",
    age: 28,
    location: "Noida",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "deepak@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "deepak@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
