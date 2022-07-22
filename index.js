// Comment each of the functions below to try them out. To get out of setInterval() press ^C (control + c)

// setTimeout
// setTimeout(() => {
//   console.log("Get ready for Module 2!");
// }, 2000);

// setInterval
// setInterval(() => {
//     console.log('I fire every two seconds!')
// }, 2000)

const modules = [
  "Fundamentals",
  "FEWD",
  "React",
  "Full Stack Web Dev",
  "Data Structures & Algorithms",
  "Capstone Project",
];

// forEach() is to iterate over an array similar to a for loop
// modules.forEach((mod) => {
//   console.log(mod);
// });

//! similar to a for loop or for of loop
// * for (const mod of modules) {
// }

// map() is to manipulate an existing array and save it to a new array
const newModules = modules.map((mod, i) => `Module ${i + 1} ${mod}`);

console.log(newModules)