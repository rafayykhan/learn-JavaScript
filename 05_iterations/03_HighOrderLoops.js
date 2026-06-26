// for of loop

// array specific loops

// ["","",""]
// [{},{},{}]

const array = [1, 2, 4, 5, 6]

for (const i of array) { // it will always detect when loops ends and what is its length
    
    // console.log(i)
}

// const stringgs = ["hello", "hi", "whatsup", "How are you"]

// for (const i of stringgs) {
//     console.log(stringgs)
//     console.log(i)
// }


// Maps

const map = new Map()
// maps aree known for unique values
// MAP ITSELF IS AN OBJECT
// COLLECTION OF KEY VALUE PAIRS
// map(key: value)
map.set("PK","Pakistan")
map.set("UAE","United Arab Emirates")
map.set("SA","Suadi Arabia")

// console.log(map)

//  lets apply the loop

for (const i of map) {
    // console.log(i)  // returns each [ key value ] in an array form 
}

// so

for (const [i, j] of map) {
    console.log(i, "=>", j)
}


// for objects

const myObj = {
    game_1: "GTA 6",
    game_2: "Call of Duty "
}
for (const i of myObj) {
    console.log(i) //TypeError: myObj is not iterable returns this
}