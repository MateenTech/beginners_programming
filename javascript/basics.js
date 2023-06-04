// Comments single-line syntax

/*
    Multi-line syntax comment 

    ! Comments are good to use that you'll
    use to describe each code.
*/


/*
        Variables
    variable can vary different data
    variables are used to store different data
    that can be manipulated.

    Declare a variable with var, let, const, and give
    a suitable name of that variable to store data;

    Here we have initialized a variable with 'var' keyword
    naming that variable 'song', which stores a data in variable
    called 'song'.
*/
var song = "Beliver";

var song2; // declaring variable with name song2;
song2 = "Till I Collapse"; // assigning data to song2 variable;


/*
    Data Types
1. String
2. Number
3. Boolean
4. Array
5. Objects 
6. null
7. undefined

In this file we'll cover:
String
Number
Boolean
Null
Undefined
*/

// String
var animal = "lion"; // Values within quotes ("", '', ``) are type string
var country = "Pakistan";
console.log(animal);
console.log(country);

// Using 'typeof' operator we can check the data type of variable's value
console.log(typeof animal); // string


// Number: any number, intiger, decimal numbers are number type
var wholeNum = 9; // whole number
var percentage = 78.99; // decimal number
var coldness = -5; // integer
console.log("\n") // just to give a line-break in console
console.log(wholeNum);
console.log(percentage);
console.log(coldness);


// Boolean: boolean values can be either one of two values true or false
var testPassed = true;
var userLoggedIn = false;
console.log("\n");
console.log(testPassed);
console.log(userLoggedIn);


// Null & undefined

// undefined is value that can be assigned when you are not
// sure that data exists or not
var noValue = undefined; 

var nothing = null // Is a value that make sure's that there is no data



/*
    Naming Variables

    You can name variable with camelCase syntax, where first letter of 
    second specified word is uppercase, and also can user (_),(&), but if you want
    to use number in naming variable use it in last.
    
    Example;
    var userName;
    var userAge;
    var _name;
    var $userHeight;
    var song1;
    var song2;

    ! never use space in variable naming or - , or number in beginning 
*/


/*
    Difference between var, let, const
    
    and why you should use 'let' instead of 'var';
*/

// Variable declared with 'var' can be a problem when you code a big application
// variable declared with 'var', it's name can override the existing one
var dog = "Safari";
var dog = "Loduos"; // first we declared 'dog' variable but now it overrides 
// in big codes we don't remember that, have we declared variable with same name; 
console.log(dog);


// let: variable declared with let gives error,
// if we declared with the same name;
let job = "Software Engineer";
// let job = "UI/UX Designer"; // SyntaxError: Identifier 'job' has already been declared

// For that security perpose always use 'let'


// You can also re-assign data to same declared variable
let business = "Online Business";
console.log("\n");
console.log(business); // Online Business;

business = "Software Company" // Updating the same variable with new value;
console.log(business) // Software Company



// Now what if you don't want to change/update data of same variable
// what if you want a data to be constant (unchanged)
// So that's where we use 'const' keyword

// let say if user specified age and he or we as coder don't want 
// to manipulate/update age; 

const userAge = 20; // just declaring with 'const' variable becomes constant
// userAge = 21; // Error: Cannot re-assing to a constant variable



//          Operators


// Arithmetic Operators
let add = 2 + 4; // +
console.log(add);

let diff = 6 - 4; // -
console.log(diff);

let product = 5 * 5;  // *
console.log(product);

let division = 32 / 8; // /
console.log(division);

let modulus = 16 % 5; // % (modulus) gives the remainder;
console.log(modulus);

let exponents = 4 ** 3; // ** works as eponents 4 * 4 * 4
console.log(exponents); // 64

let increament = 1;
increament++; // variable++ is equal to (i = i + 1) that the last value and increament 1
console.log(increament); // 2

increament--; // works same (i = i - 1);
console.log(increament) // 1


console.log("\nCompound Assingments")
// Assignment Operators;
let num = 4; // (=) is assignment operator which assign's the data to variable (num);
console.log(num); // 4

// Compound Assignment
num -= 2; // subtracting (-) 2 from num (4) and then (-=) assigning the updated value to num itself
console.log(num) // 2

num += 4;
console.log(num); // 6, because last updated value was 2 and then we add 4 to it

num *= 3;
console.log(num); // 18

num /= 2;
console.log(num); // 9

num %= 3;
console.log(num); // 0 


// Assignment Operator in 'string' uses '+' only
console.log("\nString Assignment:\n")
let fullName = "Mateen" + " " + "Bhutto"; // adding two string value with + operator,
// (" ") empty spaced string creates/adds space between string;
console.log(fullName);


// You can alson add or manipulate using variable name;
let firstName = "John";
let lastName = "Micheal";
let descp = "Hi, my name is " + firstName + " "  + lastName;

// Now in descp, the firstName and lastName becomes dynamic if
// we want to change names just update the variable of firstName and lastName

console.log(descp);


console.log("\nAssignment Rules:")
// ! Never use arithmetic operator and string (+) on uninitialized variable;
let num2; // declared variable num2, but value is not defined, by default it's undefined
console.log(num2);
num = num + 2; // undefined / NaN (Not a Number);
console.log(num2);

let programLang;
programLang += "JavaScript"; 
console.log(programLang) // undefinedJavaScript : because we are adding string to defualt undefined;


// Always initialize a variable with initial value;
let increase = 1;
increase += 1;
console.log(increase);

let programLover = "";
programLover += "Learning programming is awesome!";
console.log(programLover);




// Comparison Operators: they always returns/gives either true or false (boolean) value;


let initialNum = 6;

console.log(initialNum == "6") // true: losely strict operator (==) it converts string number to number
console.log(initialNum === "6") // false: because string type value is not equal to number type;
// always uses strictly equal operator (===) with numbers;

console.log(initialNum != 4); // true: losely not equality operator 6 doesn't equal to 4;
console.log(initialNum !== 6) // false: strictly not equality operator

console.log(initialNum > 2) // true 
console.log(initialNum >= 5) // true: because it check initial value should be greater or equal to 5;

console.log(initialNum < 4) // false
console.log(initialNum <= 6) // true: initialNum is not less than 6 but it's equal to 6, so (true)




// Logical Operators:
// (&& AND), (|| OR), (!, NOT)
console.log("\nLogical Operators")
let n = 5;

// (&&) AND operator return true, only when both operands should be true (left AND right);
console.log(n > 2 && n === 5);

// (||) OR operator returns true, if either left or right is true
console.log(n <= 6 || n === 0) 


// (!) NOT operator checks for false value;
console.log(!n) // false: becuase it check if there isn't any value, but here we already defined the value
// so thats why its returning false;

// Now let's check (!) in variable that isn't defined
let num3;
console.log(!num3); // true: because we haven't defined any value, so (!) checked that variable 'num3'
// has not have any value so it return true
