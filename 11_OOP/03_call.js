function setUsername(username) {
    // This function sets the username.
    // Assume there are some database operations here.

    this.username = username;

    // Just to check that this function is actually called.
    console.log("Called");
}

function createUser(username, email, password) {

    // If we write:
    // setUsername(username);
    // then `this` inside setUsername won't refer to the new user object.
    // So the username will not be added to our object.

    // call() lets us decide what `this` should be.
    // Here, we pass the current object (`this`) so username is added correctly.
    setUsername.call(this, username);

    // Add the remaining properties to the object.
    this.email = email;
    this.password = password;
}

// Create a new user object.
const a = new createUser("name", "name@gmail.com", "1234");

// Print the created object.
console.log(a);