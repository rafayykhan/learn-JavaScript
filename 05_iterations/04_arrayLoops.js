const myObj = {
    js: "javascript",
    cpp: "c++",
    R: "rust",
    Py: "python",
    j: "java",
}

// for of loops was working with the maps and not working with the objects

for (const key in myObj) 
{
    // console.log(key);
    // console.log(`${key} => ${myObj[key]}`)
    
}


const arry = [1, 2, 3, 4, 5, 6]

for (const key in arry) {
    
    // console.log (key) // basically return keys of an array
    // console.log (arry[key]) // returns the value
}


// for each loops

// Creating an array of programming languages
const coding = ["js", "ruby", "typescript", "cpp", "kotlin"];

// forEach() is an array method.
// It loops through every element of the array one by one.

// We pass a callback function to forEach().
// Notice that we DO NOT call this function ourselves.
// Instead, forEach() calls it automatically for each element.

// 'item'  -> stores the current element of the array.
// 'index' -> stores the position (index) of the current element.

coding.forEach(function(item, index) {

    // During each iteration:
    // 1st iteration -> item = "js",         index = 0
    // 2nd iteration -> item = "ruby",       index = 1
    // 3rd iteration -> item = "typescript", index = 2
    // 4th iteration -> item = "cpp",        index = 3
    // 5th iteration -> item = "kotlin",     index = 4

    // console.log(item, index);

});

// The important thing to remember is:
// forEach() controls the loop.
// Your callback function only describes what should happen for one element.
// forEach() keeps calling your callback until every element in the array has been processed.



// we can also use the arrow function for the call back

// coding.forEach((item) => {
//   // console.log(item);
// });


//  we can aslo  declare for each outside the funtion
// function printMe (item) {
//     console.log(item);
    
// }

// coding.forEach(printMe) // we are passing parameter as a refernce to the above function 

coding.forEach((item, index, arr)=> {

    // console.log(`Brings the item: ${item} - Brings the index: ${index} - Brings the whole array: ${arr}`)
});

// array of the object 
const myCoding = [
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"C++",
        file:"cpp"
    },
    {
        name:"Typescript",
        file:"ts"
    },
]

myCoding.forEach((item) => {
    console.log(item.file);
    
});
