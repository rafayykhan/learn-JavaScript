// array --> collection of items
// resizable means the arrays in js is dynamic 

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // array of numbers
console.log (myArr[0]) // indexing

// arrays create shallow copies whenever we use copy operation
// shallow copy ---> it is a like a heap memory in which we have a reference of the original array and if we change the original array then the copied array will also change because it is a reference of the original array
// deep copy ---> it is a like a stack memory in which we have a copy of the original array and if we change the original array then the copied array will not change because it is a copy of the original array

const myName = ["rafay", "khan"] // array of strings
console.log (myName[0]) // indexing

// we can also create array like this 
 const myArr2 = new Array(1, 2, 3, 4, 5) // array of numbers
 console.log (myArr2[0]) // indexing
 console.log (myArr2.length) // length of the array

 // methods of the array

myArr.push(10) // it will add the element at the end of the array
console.log (myArr)
myArr.pop() // it will remove the last element of the array we dont need to pass any argument
myArr.pop()
console.log (myArr)

myArr.unshift(-1) // it will add the element at the beginning of the array AND SHIFTS ALL THE ELEMENTS TO THE RIGHT
console.log (myArr)

myArr.shift() // it will remove the first element of the array AND SHIFTS ALL THE ELEMENTS TO THE LEFT
console.log (myArr)


const myArr3 = [1, 2, 3, 4, 5]
console.log (myArr3.indexOf(5)) // gives index of the element 5 in the array
console.log (myArr3.includes(4)) // gives true if the element is present in the array otherwise false

const newArr = myArr.join() // it will join all the elements of the array and return a string

console.log(myArr)
console.log(newArr) // it will give us a string of all the elements of the array separated by comma


console.log("A: ", myArr)
const myn = myArr.slice(1,5)
console.log(myn)
console.log("B: ", myArr)
const myn2 = myArr.splice(1,3,5,7,8)
console.log(myArr)
console.log("C: ", myArr) // we will get the new array containing new array with elements 
// of [0, 5, 7, 8, 4, 5, 6, 7, 8] because we know
// splice(startIndex, numberToRemove, itemToInsert1, itemToInsert2, ...)
// it will remove the elements from the array starting from the startIndex and remove numberToRemove elements and insert the items at the startIndex
