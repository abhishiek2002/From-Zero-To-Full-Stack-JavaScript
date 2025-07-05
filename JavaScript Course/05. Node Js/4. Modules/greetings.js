function greet(username) {
    console.log("hello", username);
}

// Tell other file that you can use this same function.

module.exports = greet;