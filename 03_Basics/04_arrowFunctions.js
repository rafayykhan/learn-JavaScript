const user = {
    username: "Rafay",
    price: 999,


    wellcome: function() {
        // here this refers to the current context
        console.log(`${this.username} welcome to website`)
        console.log(this); // it tells us about current context 
    }
}

// user.wellcome()
// user.username = "sam" // context changed
// user.wellcome()

// console.log(this) // returns empty node enviroment---> and in this enviroment the 
// this refers to the empty object  

// function one() {
//         let username = "rafay"
//         console.log(this.username)
// }
// //  this is only working in the objetcs not in the functions
// one() // has something inside

// const myDrink = function()
// {
//     let username = "Coke"
//     console.log(this.username)
// }

const myDrink = () => // arrow function
{
    let username = "Coke"
    console.log(this.username)
}

myDrink()

// () => {} arrow function syntax

// const addTwo = (num1, num2) => {
    // return num1 + num2  //explicit return
// }

// implicint return for one line we done have to write the curly brackets and return
// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) =>  ({username: "Rafay"}) //to return an object we have to use paranthesis and brackets
 

console.log(addTwo(8,9))