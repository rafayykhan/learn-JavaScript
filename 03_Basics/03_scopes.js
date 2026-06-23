// {} scope
// var c = 300


//  global scope 
let a = 400

if (true) {
    // block scope
  let a = 10;
  const b = 30;
  var c = 70;
//   console.log(a)
}

// console.log(a);
// console.log(b); gives an error 
// console.log(c); 

//  scope in browser is different than the scope in node

// nested scope 
// closure in javascript 


function one(){
    const name = "rafay"
    // console.log(name)

    function two() {
        const website = "youtube"

        console.log (name);

    }
    // console.log (website); // gives and error out of scope 

    // line by line execution happens

    // two()  // cannot execute
}

one()

if (true)
{
    const name = "rafay"
    if (name === "rafay")
    {
        const website = "Youtube"
        // console.log(`${name } ${website}`)
    }
    // console.log(website)  //error out of scope

}

// console.log(name); //error ---> out of scope

// ++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

// console.log(addOne(6))  wont give an error

function addOne(value) {

    return value + 1
}


// expressions

// ---> hoisiting

// console.log(addTwo(7))  // it will give an error becaue we are holiding the fuctions inside
// the variables


const addTwo = function(value) {
    return value + 2
}
