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
console.log(userNames[userNames.length - 3]); // Micheal 3rd last


console.log("\nArrays Methods: ")
// Array .push() method
// .push(): pushes the items/data at the end of the array
// .push(): returns the total number of items
let pushedUsers = userNames.push("Muhammad Ali", "Mike Tyson");
console.log(userNames);
console.log(pushedUsers);

// Array .pop()
// .pop(): pops out the last item from the array, and also returns the poped item
let lastItem = userNames.pop(); // returns last item (Mike Tyson)
console.log(lastItem);
console.log(userNames); // now userNames don't contain last item

// Array .shift()
// .shift(): returns the first item from array at the beginning
let firstItem = userNames.shift(); // returns the first Item (Mateen)
console.log(firstItem);
console.log(userNames); // now userNames don't contain first item


// Array .unshift()
// .unshift(): works same as .push(), instead .unshift() adds item at beginning
// .unshift(): returns the total number of items
let newUser = userNames.unshift("Saif Ali", "Nadir Ali"); 
console.log(userNames);
console.log(newUser);


console.log("\n\t\tArray .splice method:")
// Array .splice method
// .splice(): deletes or removes the number of items from array and returns as new Array
// it changes the original array of removed items/elements
// .splice(): methods first argument is starting index and second argument is number of items to delete
let testSplice = userNames.splice(0,2); // start from index 0 and return 2 removed item
console.log("New Returned Items: ", testSplice);
console.log("Original Array: ", userNames);


console.log("\n\t\tArray .slice method:")
// Array .slice() method
// .slice(): method removes and returns as the copy of removed item
// and it doesn't changes the original array
let copiedReturnItem = userNames.slice(0, 3);
console.log("Copied Return: ", copiedReturnItem)
console.log("Original Array:", userNames);