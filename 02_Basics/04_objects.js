const tinderUser_1 = new Object() // declaring an object
const tinderUser_2 = new Object() 


tinderUser_2.id = Symbol("123SDKA")
tinderUser_1.id = Symbol("123SDKA")
// console.log(tinderUser_1.id === tinderUser_2.id)


tinderUser_1.name  = "rafay"
tinderUser_1.email = "abc123@gmail.com"
tinderUser_1.isLoggedIn = false
// console.log(tinderUser_1);

const regularCustomer = {
    email: "asd@gmail.com",
    fullName: {
        userName: {
            firstname: "Rafay",
            lastName: "Khan"
        }
    }
}


// we can access like this no matter hmany nested objects
// console.log (regularCustomer.fullName?.userName.lastName) 

const user1 = {1: "a", 2: "b"}
const user2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, user1, user2)
console.log(obj3)


// spread operators
const user3 = {...user1, ...user2} // merged two objects
console.log (user3)

// we we get values from data base
const user = [
    {
        id: 1,
        email: "abi@gmail.com",
        name: "rafay"
    },
    {
        id: 1,
        email: "abi@gmail.com",
        name: "rafay"
    },
    {
        id: 1,
        email: "abi@gmail.com",
        name: "rafay"
    },
    {
        id: 1,
        email: "abi@gmail.com",
        name: "rafay"
    },
] // al these are objects and we can access values form them

console.log(user[1].email)
console.log(tinderUser_1);

// i want all the keys

console.log(Object.keys(tinderUser_1))
console.log(Object.values(tinderUser_1))
console.log(Object.entries(tinderUser_1)) // convert every key and value in array
console.log(tinderUser_1.hasOwnProperty("id")) // check wheather this property exists or not