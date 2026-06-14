// Two types of data types in JavaScript
// 1. Primitive data types
// 2. Non-primitive data types

// the difference occurs in call by value and call by reference
// the difference is on the basis of memory allocation and how they are stored in the memory


//*****Primitives data types in JavaScript

// 7 types of primitive data types in JavaScript
// 1. number => 2 to power 53
// 2. bigint --> large number 
// 3. string => '' or " " or ` `
// 4. boolean => true or false
// 5. null => it is an empty value (null is a stand alone value)
// 6. undefined => it is a value that is not defined yet
// 7. symbol => it is a unique identifier (when we talk about react)

/*

JavaScript is a dynamically typed language, 
meaning that type checks are performed at 
runtime while the code is executing, rather 
than during compilation 

*/
const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outSidetemp = null

let userEmail; // undefined

const id = Symbol("123")
const anotherId = Symbol ("123")

//check

console.log(id === anotherId);

//*****Reference data types in JavaScript AKA non primitive data types in JavaScript

// Objects, Array, Function

const heros = ["Superman", "Batman", "Flash"] // it is an array
console.table(heros) // it will print all heroes

const myObj = {
    name: "Rafay",
    age: 20,
    isLoggedIn: false
} // it is an object
console.table(myObj) // it will print all the key value pairs of the object

const myfunc = function myFunc ()
{
    console.log("Hello, World!")
    
}
console.log(myfunc) // it will print the function definition
myfunc() // it will execute the function and print "Hello, World!"


console.log (typeof heros) // it will print object because array is also an object in JavaScript
console.log (typeof myObj) // it will print object
console.log (typeof myfunc) // it will print function