// ==========================
// Getters & Setters
// ==========================

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; // Calls the setter automatically.
    }

    // Getter: runs whenever we access user.password
    get password() {
        // Return the password in lowercase.
        return this._password.toLowerCase();
    }

    // Setter: runs whenever we assign a value to password
    set password(value) {
        // Store the real value in a different property
        // to avoid infinite recursion.
        this._password = value;
    }
}

const user1 = new User("user@u.ai", "123ABC");

console.log(user1.password);

// The above is the modern syntax for using getters and setters.


// ==========================
// Inheritance
// ==========================

class UserClass {
    constructor(username) {
        this.username = username;
    }

    // Method available to every User object.
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

// Teacher inherits everything from UserClass.
class Teacher extends UserClass {
    constructor(username, email, password) {

        // Call the parent constructor.
        super(username);

        this.email = email;
        this.password = password;
    }

    // Teacher's own method.
    addCourse() {
        console.log(`A new course is added by ${this.username}`);
    }
}

const myUserObj = new Teacher(
    "user1",
    "username@gmail.com",
    "123"
);

myUserObj.addCourse();

const Obj2 = new UserClass("User 2");

Obj2.logMe();

// Check if myUserObj is created from the Teacher class.
console.log(myUserObj instanceof Teacher);


// ==========================
// Object Property Descriptors
// ==========================

// getOwnPropertyDescriptor() shows hidden details
// about an object's property.

console.log(Math.PI);

// This won't work because Math.PI is read-only.
// Math.PI = 5;

// View the property descriptor of Math.PI.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);


// ==========================
// defineProperty()
// ==========================

const myNewObj = {
    name: "first",
    email: "first@email.com",
    isLoggedIn: true
};

// View the details of the "name" property.
console.log(
    Object.getOwnPropertyDescriptor(myNewObj, "name")
);

// Change the behavior of the "name" property.
Object.defineProperty(myNewObj, "name", {
    writable: false,   // Cannot change its value.
    enumerable: false  // Won't appear during iteration.
});

// Verify the updated descriptor.
console.log(
    Object.getOwnPropertyDescriptor(myNewObj, "name")
);


// ==========================
// Iterating over Objects
// ==========================

// Objects are not directly iterable using for...of,
// so this would throw an error.

// for (const [key, value] of myNewObj) {
//     console.log(key, value);
// }

// Correct approach: use Object.entries()
// to convert the object into an array.

for (const [key, value] of Object.entries(myNewObj)) {
    console.log(`Key: ${key}, Value: ${value}`);
}