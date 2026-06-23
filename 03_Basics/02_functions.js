//shopping cart

function calculateCartPrice (val1, val2, ...num1) { // rset operator 
    //200 and 300 goes in val1 and val2  rest will go into the num1 as an array this is what
    //  rest operator doees it accepts the remaining or currnet values as an array
    //  so no matter how much data we are giving
    return num1

}

console.log(calculateCartPrice(200, 300, 500, 900)) // gives an array


const user = {
    username: "Rafay",
    price: 2233

}

function handleObject (anyobject)
{
    console.log(`usernmae is ${anyobject.username} and the price is ${anyobject.price}`)
}   

// handleObject (user) // thts how we pass object in a function

handleObject ({
    // we can pass direct object 
    username: "sam",
    price: 898 
    //  it overwrtites the values of the original user 
})

const mynewarry = [
    200,
    400,
    788
]

function returnArray(getArray)
{
    return getArray;
}

console.log(returnArray(mynewarry))