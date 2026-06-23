function myName() {

  console.log("R");
  console.log("A");
  console.log("F");
  console.log("A");
  console.log("Y");
}

myName // reference
myName() // calling a fuccntins


// function addTwoNumbers()
// {
//     const num = 7 + 9
//     console.log(num)
// }

// addTwoNumbers();

// function addTwoNumbers(num1, num2) // a parameters is being passed --> Variable declared in the function definition
// {
//     console.log(num1 + num2) 
// }
function addTwoNumbers(num1, num2) // a parameters is being passed --> Variable declared in the function definition
{
    // console.log(num1 + num2)
    let result = num1 + num2
    return result // after this nothing will execute
}
 
// passing an argument --> Actual value passed to the function when it is called
const result = addTwoNumbers(3, 9); // wont print because we are not printing 

console.log("result: ", result )



function loginUsermessage (userName = "rafay") // giving value by default and after this the 
//  if condition wont be execute it would never 
{
    if (userName === undefined)
    {
        console.log("please enter a username")
        return
    }

    return `${userName} just logged in.`
}

// loginUsermessage('rafay') here we are successfully returning the value we are not printing anythin thats why
// it will print nothing.

const output = loginUsermessage('sam') // overwtites the value 
console.log(output)