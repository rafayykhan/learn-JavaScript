// destructuring of objects 

const course = {
    coursename: "Data",
    price: "123",
    courseInstructor: "Rfaya"
}

// course.courseInstructor

// to make data clean

// from where we have to extract the value
const {/* from which property and we can also rename this  */ courseInstructor: inst} = course // from this  object

console.log(inst) // return the name of the instructor


// react stuff 
// const navbar = (company) => {

// }
// navbar(company = "rafay")


// API ---> json format

// values came  from backen in the form of JSON

// {
//     name: "RAFAY",
//     courseName : "JS",
//     price: "free",
// }

// API can be in the orm if ann array which contain many objects

// [
//     {},
//     {},
//     {},
//     {},
// ]