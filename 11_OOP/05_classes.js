// ==========================
// ES6 Classes
// ==========================

// The constructor is automatically called
// whenever a new object is created.

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email; // Fixed typo: emai -> email
        this.password = password;
    }

    // This method returns an "encrypted" password.
    // (Just for demonstration purposes.)
    encryptedPassword() {
        return `${this.password}abc`;
    }
}

// Create a new User object.
const myUser = new User("abcdedn", "name@mail.com", "pass");

// Call the class method.
console.log(myUser.encryptedPassword());

// Print the complete object.
console.log(myUser);


// ==========================
// Static Methods
// ==========================

// Renamed to avoid duplicate class names.
class UserClass {
    constructor(username) {
        this.username = username;
    }

    // Normal instance method.
    LogMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static methods belong to the class itself,
    // not to objects created from the class.
    static createId() {
        return "123";
    }
}

const user1 = new UserClass("junaid");

// This will throw an error because createId()
// is a static method.
// console.log(user1.createId());


// ==========================
// Inheritance
// ==========================

// Teacher inherits everything from UserClass.
class Teacher extends UserClass {
    constructor(username, password) {
        // Call the parent constructor.
        super(username);

        this.password = password;
    }
}

// Create a Teacher object.
const testingUser = new Teacher(
    "testing",
    "testingUser@gmail.com"
);

// Static methods are inherited by child classes,
// so this works.
console.log(Teacher.createId());

// Instance methods also work.
testingUser.LogMe();