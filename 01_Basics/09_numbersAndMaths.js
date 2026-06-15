const score = 400 // it can store string or number 

const balance = new Number(100) // it will only store number 
console.log (balance) 


console.log (balance.toString());
console.log (balance.toFixed(2)); // for precision value

const  otherNumber = 21231.893284

// to precise the value
console.log(otherNumber.toPrecision(3));
console.log (otherNumber.toPrecision(7));


// For view the standard number cal
const hundreds = 10000000
console.log (hundreds.toLocaleString('en-PK'))

//++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++

console.log(Math) // itself an object contain lot of values

console.log(Math.abs(-5)) // negative to positive
console.log(Math.round(4.6)) // round to the nearest integer
console.log(Math.ceil(4.1)) // round up to the nearest integer
console.log(Math.floor(4.9)) // round down to the nearest integer
console.log(Math.min(1, 2, 3, 4, 5)) // return the minimum value
console.log(Math.max(1, 2, 3, 4, 5)) // return the maximum value
console.log(Math.random()) // return a random number between 0 and 1
console.log(Math.random() * 10) // return a random number between 0 and 10
console.log(Math.random() * 10 + 1)
console.log((Math.random() * 10 + 1).toFixed(0)) // return a random number between 1 and 10 and round it to the nearest integer

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)