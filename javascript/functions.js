// function are javascript reusable code
/*
    sometime when we need some code with same logic and functionality
    we have to write code again and again where we need.

    For example:
    Sum of two numbers, when ever we want to sum two numbers
    we have to write the code for adding numbers, in that case 
    function appers, we write logic and whenever we want to 
    sum numbers we just call that function.

    Function is declared with keyword (function) and we have to
    name that function just same as with variables
*/

function sum() { // declaring a function with (function) keyword and naming it (sum) with parenthesis
    console.log(2 + 2);
};
sum(); // calling or invoking the function;


// In parenthesis, we declare parameters, like here num1, num2
// these works as placeholders or variable that will hold value passed as arguments
function sumTwoNumbers(num1, num2) {
    const addNumber = num1 + num2;
    return addNumber; // "return" keyword returns back the added Number, value after adding; 
};
// we pass values as arguments, when we call the function
const valueReturn = sumTwoNumbers(2, 5); // adds the num1 as 2 and num2 as 5 inside the function and return the added value
// return value by 'sumTwoNumbers(2,5)', we are storing that return (7) in variable
console.log(valueReturn); // 7