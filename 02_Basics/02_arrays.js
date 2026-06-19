const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dc_heroes = ["Superman", "Batman", "Wonderwoman", "Flash", "Green Lantern"];

// marvel_heroes.push(dc_heroes) 
// console.log (marvel_heroes) // here the this will print a merged array because we know an array can take anything as data
// console.log(marvel_heroes[5][3])

// we can easily merge these two by using different method

const all_heros = marvel_heroes.concat(dc_heroes)
console.log (all_heros) // this will return the result of two merged arrays

// spread operator ---> easy method

const all_newHeroes = [...marvel_heroes, ...dc_heroes] // better than concatinate
console.log (all_heros)

const another_array = [1,2,3, [4,5,6], 7,8,9,[10,11,12, [13,14,15, [16,17,18]]]]
console.log(another_array) // this contains nested array

// so there is a method to flatten the array and it is called flat() method 
// it will concatinate the sub arrays into the main array and it will return a new array with all the elements of the sub arrays in the main array

//  const flat_array = another_array.flat(depth) // it will flatten the array by one level

const flat_array = another_array.flat(Infinity) // it will flatten the array by all levels

// in place of depth we can also use Infinity to flatten the array by all levels
console.log (flat_array) // this will return a new array with all the elements of the sub arrays in the main array


console.log (Array.isArray("Rafay")) // it will return false because it is not an array
console.log (Array.from("Rafay")) // it will return an array with each character as an element
console.log (Array.from({name: "Rafay"})) // it will return an array with the key-value pairs as elements
// it gave us an empty array 

/*  
so whenever we do 

console.log(Array.from({name: "rafay"}))

it will search for

{
  0: "Rafay",
  1: "Khan",
  length: 2
}

because arrays work like this internally:

["Rafay", "Khan"]

// is similar to

{
  0: "Rafay",
  1: "Khan",
  length: 2
}

So Array.from() checks your object:

{
  name: "Rafay"
}

and asks:

"What is item number 0?"  Doesn't exist.
"What is item number 1?"  Doesn't exist.
"How many items are there (length)?"  Doesn't exist.

Since it can't find a length, it assumes:

length = 0

and creates an array with 0 elements:

[]

That's why you got an empty array.

Your object:

{
  name: "Rafay"
}

stores data by name (name), whereas Array.from() expects data by number (0, 1, 2, ...).
*/

let n1 = 100
let n2 = 455
let n3 = 728

console.log (Array.of(n1, n2, n3))
