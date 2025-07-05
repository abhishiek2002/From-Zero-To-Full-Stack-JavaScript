// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


let person = {
    greet() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }
};

var abhishek = Object.create(person);
abhishek.firstName = "Abhishek";
abhishek.lastName = "Kuntal";

abhishek.greet();

var john = Object.create(person, {
    firstName: {value: "John"},
    lastName: {value: "Cena"},
});

john.greet();