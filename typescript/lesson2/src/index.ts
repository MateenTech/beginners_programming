// Arrays
const fruits: string[] = ["Apple", "Banana", "Mango", "Grapes"];
const nums: number[] = [23, 334, 545, 232, 4, 32];
const mixedData: (string | number | boolean)[] = ["Apple", 23, true];


// fruits.push(2); Error: you can not pass any other data argunment to type string[]
fruits.push("Pomegrenate");
console.log(fruits);