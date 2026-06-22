// singleton --> objects with constructor
// Object.create 

// Object literals

const mySym = Symbol("key_1")

const user = {

    name: "Rafay",
    "full name": "Rafay Khan", // now it cant be access by using " . "
    // symbol as a key
    [mySym]: "key_1",  
    age: 20,
    location: "Lahore",
    email: "abs@gmail.com",
    isLoggedin: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}


// its not the best way to declare we are not saying that it cant be used but it is not the best
console.log(user.email)
// console.log(user[email]) // it will gave an error because as we know the here email: "abs@gmail.com",the email is being treated like a string 
// so

// good way
console.log(user["email"]); // will give correct result 
console.log(user["full name"]) 
console.log(user[mySym])

user.email = "aaa@gmail.com" // over writes the value 
// Object.freeze(user)
user.email = "1231@gmail.com" // wont overwrite the email because we just used freeze 
console.log (user["email"])
console.log (user);


user.greetings = function()
{
    console.log("hello user")
}

user.greetingstwo = function()
{
    // now refreeing the name 
    // to refer saem object we use  "this."
    console.log(`hello user ${this.name}`) // here this is very important as 
    // if we want to access the internel properties of objects 
}

console.log(user.greetings) //function isnt executed yet but obatained its reference
console.log(user.greetingstwo())