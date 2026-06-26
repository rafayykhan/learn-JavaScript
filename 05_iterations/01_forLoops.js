//  for loops


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const element = 0

// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    // console.log(element)
    
// }

// console.log(array.length)


// //  nested loops
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// // const element = 0

// for (let i = 0; i < array.length; i++) {
//     console.log(`Outer loop: ${i}`) // runs one time then
//         for (let j = 0; j < array.length; j++) {
//             const element = array [j];
//             console.log(`inner loop; ${element}`) // inner loop runs 100 times
            
//         }
// }


// Break and Continue

for (let i = 1; i <= 20 ; i++) {
    if (i == 5) {
        // console.log("Nummber has been detected");
        // console.log('Exiting')
        // break // terminate the program
        continue // skip one step 
    }
    console.log(i)  // here as per the program the 5 has been skipped
}