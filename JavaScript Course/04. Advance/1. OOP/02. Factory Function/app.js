// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create way to create objects compared to using constructors and the new keyword.

// function name(params) {
//     return {object};
// };


// ********************

// var abhishek = {
//     firstName: "Abhishek",
//     lastName: "Kuntal",
//     fullName() {
//         console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love JavaScript`);
//     },
// };
// var abhimanyu = {
//     firstName: "Abhimanyu",
//     lastName: "Kumar",
//     fullName() {
//         console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love JavaScript`);
//     },
// };  // ... and so on

// or we can use factory function for this So that we do not need to write that much code

function createPerson (firstName, lastName, pl) {
    return {
        firstName: firstName,
        lastName: lastName,
        pl: pl,
        intro () {
            console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`); 
        },
    };
};

var John = createPerson('John', "Cena", "Wrestling");
John.intro();

var abhishek = createPerson('Abhishek', 'Kuntal', 'FullStack & AI Developing');
abhishek.intro();
