// Exercise #25
// Spread Operator
const numbers = [1,2,3];
const allNumbers =[...numbers,4,5,6];
console.log(`The Combined numbers are ${allNumbers}`);

// Rest Operator
function sum (...numbers){
    return numbers.reduce((sum, total) => sum * total, 1);
}

console.log(`The multiplication of numbers are ${sum(10,10)}`); // Output: 15