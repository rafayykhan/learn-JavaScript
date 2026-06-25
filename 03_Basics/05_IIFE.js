//immddiately involked function expression (IIFE)


//  sometimes we have to tackle the polotion of global scope in 
// some functios 
(function chai(){
    console.log("DATABASE CONNECTED")
}) (); //---> immedialtely executed  and it does not know where to end so we 
// use semi colon to end its a sign to stop the fuunction 

// first one we write our function and inn second its an execution
// () ()

/* 

(Create this function) ();
                        ↑
             call it immediately


*/

(function rafay() {
    console.log ("hello")
})();

// another way to write arrow function

(() => {
    console.log ("Hi there")
})();

/* 

The difference is that with an IIFE, JavaScript doesn't save it anywhere. It creates it, runs it once, and then it's gone.

Think of it like a disposable cup:

Create cup
↓
Use it
↓
Throw it away
*/

// named IIFE
((name) => {
    console.log(name)
})("rafay")