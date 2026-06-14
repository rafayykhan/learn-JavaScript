const accountId = 123 // it will never change becasue of the const 

// as we declare the variables it willl assign some memory to the variables where they store the values
let accountName = "Rafay" // it can be changed 

// let fix the problem because it has the control over the scope like if (true) {
//     let accountName = "khan" 
//     // it will not change the value of accountName outside the block scope because of let
// }
// console.log(accountName) // it will print Rafay instead of Rafay khan because of let

accountName = "Rafay khan" // name changed 


var accountPass = "12344566"

//we dont use var because there used to be a problem that it didnt know what Scope is (block scope)
//does have the control over it like if (true) {
//     var accountPass = "124566" 
//     // it will change the value of accountPass outside the block scope as well because of var
// }
// console.log(accountPass) // it will print 124566 instead of 12344566 because of var



accountEmail = "rafay123@gail.com" 
// and 

let accountstate;
// we can declare a variable without assigning it a value and we can assign it later 
// it will be undefined until we assign it a value

// accountstate = "active" // now we assign a value to accountstate


console.table ([accountId, accountName, accountPass, accountEmail, accountstate])