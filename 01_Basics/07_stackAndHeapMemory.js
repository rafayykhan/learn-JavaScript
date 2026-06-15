// stack and heap

// stack---> used in primitive
/*

whenever the stack memory is used  whatever we declare the variable 
it gives the copy of the value and store it in the stack memory and
whenever we change the value of the variable it will not change the
value of the other variable because they are stored in different 
memory locations in the stack memory
*/


// heap---> used in non-primitive

/*

whenever the heap memory is used whatever we declare the variable 
it gives the reference of the value and store it in the heap memory and
whenever we change the value of the variable it will change the
value of the other variable because they are stored in the same 
memory location in the heap memory

reference of ---> original value

*/

let myName = 'rafay';

let firstName = myName;

firstName = 'Khan'


console.log (myName)
console.log (firstName) 

let userOne = {
    email: "userone123@gmail.com",
    username : "user"
}

let userTwo = userOne

userTwo.email = "usertwo124@gmail.com"

console.log (userTwo.email)
console.log (userOne.email)