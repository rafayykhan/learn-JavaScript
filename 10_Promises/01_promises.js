// // the promise is created 
// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     }, 1000)
//     // the promise consumed wll print first because it is outside the scope
//     // resolve() // we have to connect the below function with resolve by calling like this
// })

// // .then has straight realation with .then
// promiseOne.then(function(){
//     // this function automatically recieves an argument that what ever happen inside above function returnsthe value here

//     console.log('promise consumend')
// })

// // we have used promise so we have to consume it as well  
// //  we can also do everything in jsut one part

// new Promise(function(resolve, reject){
//     setTimeout(function() {
//         console.log("Async task 2")
//         resolve()
//     }, 2000)
// }).then(function(){ // then accepts a function and it automatically return the value because it recieves the argument from above because it is directly connected to the 
//     // resolve.
//     console.log('async task confirmed')
// })

// const promiseThird = new Promise(function(resolve, reject){
//     // lets say we got data from network and we have to pass the data as well
//     setInterval(function() {
//         // we can pass data as a parametre 
//         resolve({username: "rafay", email: "rafay.khan@gmail.com", userid: Math.random()*10 + 1})
//         //  we have passed the data now how can this will be available in the .then part
//     },1000)
// })


// // we know the resolve and then has a connectiona nd we are expecting some data by default
// promiseThird.then(function(user){
//     console.log(user)
// })


// const promiseFourth = new Promise(function(resolve, reject){
//     setInterval(function(){
//         let error = false
//         if (!error){
//             resolve({username: "rafay", email: "rafay.khan@gmail.com", userid: Math.random()*10 + 1})
//         }
//         else{
//             reject("Something went wrong")
//         }
//     },1000)
// })

// promiseFourth.then((user)=> { // avoiding callback hell
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error) => {
//     console.log(error) // catch an error
// }).finally(()=> console.log("The promise is either resolved or rejected"))
// // .finally() -> it also accept the callback it is always executed 

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({
//                 username:"js",
//                 password:1232
//             })

//         } else {
//             reject("Error JS went wrong")
//         }
//     }, 1000);
// })
// // we can use the async and await insted of then and catch 
// // for async and await we have to wrap to try and catch block instead of .then and .catch
// // async await does not handle errors directly  
// async function promisefivefunc() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }

// }

// promisefivefunc()


async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await response.json() // strinf -> json
    console.log(data);
  } catch (error) {
    console.log("E: ",error);
    
  }
    
}
getUsers()