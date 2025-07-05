// --------------------------------------------------
// Refactor this code to use async/await
// console.log("Start");

// function getUserDataFromDB(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Valid Name");
//       resolve(name);
//     }, 2000);
//   });
// }

// function getUserHobbies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user hobbies...");
//       resolve(["Football", "Singing", "Solving Math"]);
//     }, 2000);
//   });
// }

// getUserDataFromDB("HuXn")
//   .then((name) => getUserHobbies(name))
//   .then((hobby) => console.log(hobby))
//   .catch((err) => console.log(err));

// console.log("End");

// --------------------------------------------------


function getUserDataFromDB(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Valid Name");
      resolve(name);
    }, 2000);
  });
}

function getUserHobbies(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user hobbies...");
      resolve(["Football", "Singing", "Solving Math"]);
    }, 2000);
  });
}

async function GettingData(params) {
    try {
        const name = await getUserDataFromDB("Abhishek");
        const hobbies = await getUserHobbies(name);
        console.log(`Hobbies of ${name} are ${hobbies}`);
        
    } catch (error) {
        console.log(error);
    }
}

GettingData()