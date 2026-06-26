// const coding = ["js","typscript",'ruby',"cpp",'java']
// Problem with for each loop

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item // gives undefined -> not return any value
// })

// console.log(values);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// filters
// also takes call back
// const newNum = nums.filter((num) => {
//     return num > 5  
    // console.log(num > 5) // gives ture and false

/*

This is one of the most common beginner mistakes with filter().

Your code:

const newNum = nums.filter((num) => {
     num > 5
});

returns:

[]
Why?

Because when you use curly braces {} in an arrow function, you must explicitly return a value.

Your callback is actually doing this:

(num) => {
    num > 5;   // evaluates true/false...
    // ...but doesn't return anything!
}

So every iteration returns:

undefined

Internally, filter() sees something like:

1  -> callback returns undefined ❌
2  -> callback returns undefined ❌
3  -> callback returns undefined ❌
...
10 -> callback returns undefined ❌

Since undefined is treated as false, no elements are kept.

*/
    
// });


const newArr = []


nums.forEach((num) => {

    if (num > 4) {
        newArr.push(num)
    }
})

console.log(newArr)


const books = [
  {
    title: "Book One",
    genre: "Fiction",
    edition: "1st Edition",
    date: 1993,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    edition: "2nd Edition",
    date: 1923,
  },
  {
    title: "Book Three",
    genre: "Science",
    edition: "1st Edition",
    date: 1998,
  },
  {
    title: "Book Four",
    genre: "History",
    edition: "3rd Edition",
    date: 2000,
  },
  {
    title: "Book Five",
    genre: "Fantasy",
    edition: "2nd Edition",
    date: 1923,
  },
];


const newBooks = books.filter((bk) => {
    return bk.genre === "History" && bk.date >= 1900
    
});

console.log (newBooks)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The `map` method accepts a callback function that is applied to each element in the array.
// If you use curly braces `{}`, you need to include a `return` statement in the callback function.

// Example using `map` without curly braces:
// const newNums = nums.map((num) => num + 10);
// console.log(newNums); // Outputs: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining Methods:
// JavaScript allows chaining of array methods, which means you can apply multiple methods in succession.
// For example, you can chain `map`, `filter`, `reduce`, and other array methods.
// You can chain multiple methods, even up to 100 or more, without any errors.

const newNums = nums
  .map((num) => num * 10) // Multiplies each element by 10
  .map((num) => num + 1)  // Adds 1 to each element from the previous step (results: 11, 21, 31, ...)
  .filter((num) => num < 50); // Filters out elements that are 50 or greater

console.log(newNums); // Outputs: [11, 21, 31, 41]

