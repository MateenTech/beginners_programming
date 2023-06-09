// Functions
function sum(num1: number, num2: number): void { // type void means function returns nothing
  const addNum: number = num1 + num2;
  console.log(addNum);
}
sum(3, 4);


function addNumOfArr(nums: number[]) {
    const sum = nums.reduce((acc, curr) => acc + curr);
    return sum;
};
const sumAll = addNumOfArr([2,6,7,3,7,8]);
console.log(sumAll);