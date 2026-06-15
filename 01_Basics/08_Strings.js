let name = "rafay"
let repoCount = 50;

// console.log (name + repoCount + " value")

// we use `` for string interpolation means
// we can use variable inside the string without concatenation
console.log (`My name is ${name} and i have repo count of ${repoCount}`)

// we can also declare string in a different way

const fullName = new String ("raf-ay")
console.log (fullName)
console.table (fullName) // key value pair of the string


console.log (fullName[0]) // indexing

/* 
console.log (fullName.__proto__) // prototype of the string IT IS EPMTY
BUT ACTUALLY IT IS NOT EMPTY IT HAS ALL THE METHODS of the string but it is
not visible in the console because it is hidden but we can access it by using
the methods of the string directly from the prototype 

*/

console.log (fullName.length) // we can use other methods of prototype directly from prototype
console.log (fullName.toUpperCase()) // make the string in capital alphabats
console.log (fullName.toLowerCase) // will give the funstion name 
console.log (fullName.toLowerCase()) 

console.log (fullName.charAt(2)) // tell us about the character at 2th index    
console.log (fullName.indexOf('y')) // tell us about the idex of the character  


//SLIICING

const newString = fullName.substring(0, 2)
console.log (newString)



const anotherString = fullName.slice(-6, 4) 
// here -6 means start from the end of the string and 4 means end at the 4th index from the start of the string 
console.log(anotherString)

const newstringOne = "               rafay        "
console.log (newstringOne)
console.log (newstringOne.trim()) // it will remove the extra space

const url = "http://www.rafay.com%23khan"
console.log (url.replace("http://www.rafay.com%23khan"
, '-')) // it will replace the url with -
 
console.log (url.includes ('rafay'))


let myN = "my-name-is-rafay-khan-and-i-dont-like-socailizing"

console.log(myN.split('-', 3)); // we have got an array in which we have 3 strings 
// and we seperated on the baisis of dashes
