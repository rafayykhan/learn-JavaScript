// let score = "33abc"

// console.log (typeof score)

// let valueInNumber = Number(score) // it will convert the string to number
// console.log (typeof valueInNumber) 
// console.log (valueInNumber) // NaN ---> not a number (the score will convert into number but when we check the score it will print NaN)

let score = null

console.log (typeof score)

let valueInNumber = Number(score) // it will convert the string to number
console.log (typeof valueInNumber) 
console.log (valueInNumber) // (the score will convert into number but when we check the score it will print 0)

// "33" --> 33
// "33abc" --> NaN
// true --> 1; false ---> 0;

let isLoggedIn = 1 

console.log(typeof isLoggedIn) // number
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert into boolean

console.log(typeof booleanIsLoggedIn) // boolean
console.log(booleanIsLoggedIn)

// 1 --> true
// 0 --> false
// "Rafay" --> true
// "" --> false

// ************************  Operation *********************

let value = 3
let negValue = -value // it will convert the value into negative value

console.log(negValue) // it will print -3

// console.log(2 + 3) // it will print 5
// console.log(2 - 3) // it will print -1
// console.log(2 * 3) // it will print 6
// console.log(2 / 3) // it will print 0.6666666666666666
// console.log(2 % 3) // it will print 2 (it will give the remainder of the division)
// console.log(2 ** 3) // it will print 8 (it will give the result of the power)

let str1 = "Hello"
let str2 = "World"

let str3 = str1 + " " + str2
console.log (str3);

// Problems (complex situation)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) //the answer will be 122 becasue the first one is string
console.log(1 + 2 +"2")  // the answer will be 32 because the first one is number

/* 
Key rule: When the + operator has at least one string, 
JavaScript performs string concatenation instead of 
arithmetic. Order of evaluation matters—it goes left 
to right.
*/


console.log (true)
console.log (+true)
console.log (+"")

//
let gameCounter = 100
gameCounter++
console.log (gameCounter)   
++gameCounter
console.log(gameCounter)
