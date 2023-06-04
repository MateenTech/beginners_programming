// Arrays are special type of objects;

// let say that you have multiple (10,....n) names of user to store in a variable
// so you have to initialize alot of variables
let name1 = "Ali";
let name2 = "John";
let name3 = "Ahmed";
/*
.
.
.
 and so on,
*/

// To get rid of this problem we solutin Array which stores multiple values in single variable
// Array is declared with [] (open and closed square brackets)
// and each data in Array is element or item;

// ! Always declare Arrays and Objects with 'const' to prevent re-assigning
const userNames = ["Ali", "John", "Micheal", "Ahmed", "Asghar"];
console.log(userNames);

// If we want to access the data / item of array 
// we use indexes, In an array items are zero baseed index means start from 0;
console.log(userNames[0]); // Ali: means give me the value that is at 0 position;
console.log(userNames[1]); //  John

// We can also assign to other variable
let specificUser = userNames[3]; // Take the data/element at from index 3 and,
// assign it to specificUser variable
console.log(specificUser); // Ahmed


// Updating array with index;
// userName[0], element is Ali so we'll change it to "Mateen"

userNames[0] = "Mateen"; // take the data "Mateen" at assign it to userNames at index 0;
console.log(userNames);



// We can check how many elements are there in array using 
// .length operator;
console.log("\nChecking and Accessing using .length operator:");
let numOfUsers = userNames.length; // returns the length of userNames
console.log(numOfUsers); // 5 elements we have in array;


// Accessing last and nth to last element;
let lastElement = userNames[userNames.length - 1];
console.log(lastElement); // Asghar last
console.log(userNames[userNames.length - 2]); // Ahmed 2nd last

