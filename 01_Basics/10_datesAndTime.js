//DAtes

let myDate = new Date()
console.log (myDate) // gives date and time current

// console.log(`gives Date: ${myDate.toString()}`)
// console.log(`gives Date String: ${myDate.toDateString()}`)
// console.log(`gives Localized Date: ${myDate.toLocaleString()}`)
// console.log(`gives Year: ${myDate.getFullYear()}`) // gives the year
// console.log(`gives Month: ${myDate.getMonth()}`) // gives the month 0-11
// console.log(`Gives the date: ${myDate.getDate()}`) // gives the date 1-31
// console.log(`Gives the hours: ${myDate.getHours()}`) // gives the hours 0-23
// console.log(`Gives the minutes: ${myDate.getMinutes()}`) // gives the minutes 0-59
// console.log(`Gives the seconds: ${myDate.getSeconds()}`) // gives the seconds 0-59
// console.log(`Gives the milliseconds: ${myDate.getMilliseconds()}`) // gives the milliseconds 0-999

console.log (typeof myDate) // object

// let myCreatedDate = new Date(2023, 0, 23) // we want create our own date
// let myCreatedDate = new Date(2023, 0, 23, 5, 7) // we want create our own date
// console.log (myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2023-01-14") // we can also create date by passing the date in string format
// console.log (myCreatedDate.toLocaleString()) // returns the date in local format and time format

let myTime = Date.now() // 
// console.log(myTime) // return milliseconds from 1 Jan 1970 to current date and time

// console.log(myCreatedDate.getTime()) // return milliseconds from 1 Jan 1970 to the date we created

// we can also converts in seconds
//Math.floor() is used to round down the number to the nearest integer
// console.log (Math.floor(myTime/1000)) // return seconds from 1 Jan 1970 to current date and time

