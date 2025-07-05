// console.log(window);

// console.log(this); // this keyword will refer to the window object because it is used alone

// console.log(this === window);  // give true

// ********************************

// window.firstName = "Abhishek"; // we have create firstName peoperties to the window object that is why we can use this "firstName" property inside the code anywhere (because window object is global object)

// this.lastName = "Kuntal"; // it also create "lastName" property to the window object 

// console.log(window);

// *********************************

// function printThis() {
//     return this;  // this refer to the object owner that is window object here as well 
// }

// const res = printThis();
// console.log(res);   // give window object again

// ********************************

// var obj = {
//     firstName: "Abhishek",
//     lastName: "Kuntal",
//     fullName() {
//         return this; // this refer to the owner object that is "obj" in this case
//     },
// };

// var res = obj.fullName();
// console.log(res);  // give us same "obj" here


// ********************************

// var obj = {
//     firstName: "Abhishek",
//     lastName: "Kuntal",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`; // this refer to the owner object that is "obj" in this case
//     },
// };

// var res = obj.fullName();
// console.log(res); // give "Abhishek Kuntal"


// ************************

// var obj = {
//     firstName: "Abhishek",
//     lastName: "Kuntal",
//     fullName: () => {
//         return this;  // this refer to window object because of "arrow function"
//     },
// };

// var res = obj.fullName();
// console.log(res);  // window


// ************************

// var obj = {
//         firstName: "Abhishek",
//         lastName: "Kuntal",
//         fullName: () => {
//             return `${this.firstName} ${this.lastName}`;  // this refer to window object because of "arrow function"
//         },
//     };
    
// var res = obj.fullName();
// console.log(res);  // undefind