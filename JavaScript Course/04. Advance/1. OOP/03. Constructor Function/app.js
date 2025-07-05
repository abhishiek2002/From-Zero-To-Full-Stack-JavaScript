// Constructor functions in Js are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

function CreatePeople(firstName, lastName, pl) {
    this.firstName = firstName  // this should be refer to window object but because of "new" keyword it refers to empty object create by "new" keyword
    this.lastName = lastName
    this.pl = pl
    this.info = function () {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and I love ${pl}`);
        
    }
}

// // "new" Keyword:
// // 1. First create empty object {}
// // 2. Setd "this" to point to that object
// // 3. We can omit the return statement using "new" keyword

var john = new CreatePeople("JOhn", "Cena", "Wrestling");
var abhishek = new CreatePeople("Abhishek", "Kuntal", "JavaScript And AI");

console.log(typeof abhishek);  // object

abhishek.info();
console.log(john);


// ****************************

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

    this.getInfo = function () {
        return `${this.title} by ${this.author} (${this.year})`;
    }
};

var book1 = new Book("The subtle art of not giving a Fuck", "Mark", 2020);
var book2 = new Book("Atomic Hobits", "James Clear", 2022);

console.log(book1);
console.log(book2);

console.log(book1.getInfo());

var bookRes2 = book2.getInfo();
console.log(bookRes2);

// *******************************

function person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender

    this.info = function () {
        return `Name is ${this.name} and age is ${this.age} and gender is ${this.gender}`;
    }
}

var person1 = new person("Abhishek", 22, "Male");
var person2 = new person("Ankit", 23, "Male");

console.log(person1.info());
console.log(person2.name);

