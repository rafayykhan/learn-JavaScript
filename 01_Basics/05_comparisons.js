// console.log(2 > 1) // it will print false
// console.log(2 >= 1) // it will print true
// console.log(2 < 1) // it will print false
// console.log(2 <= 1) // it will print false
// console.log(2 < 10) // it will print true
// console.log(2 == 10) // it will print false
// console.log(2 != 10) // it will print true

// Problems (complex situation)
//String automatically converted into Numbers

// console.log(2 == "2") // it will print true because it will convert the string into number



console.log(null == 0) // it will print false because null is not equal to 0
console.log(null < 0) // it will print false
console.log(null > 0) // it will print false
console.log(null <= 0) // it will print true 
console.log(null >= 0) // it will print true

//The reson is that an equality check == and comarisons > < >= <= work differenly.
//Comparisons conver null to a number, treatin it as 0.
//That's why null>=0 is true and null>0 is false

//strict check ---> cehck the value as well as the type of the value 
console.log(2 === "2") // it will print false because it will not convert the string into number
console.log("2"==2) // true
console.log("2"===2) // false 
// because in strict check it will not convert the string into number and it will check the type as well as the value