// function age(age){
//     console.log(`Your age is ${age}`);
// }
// function processingUserInput(callback){
//     const input = prompt('Enter your age please')
//     callback(input)
// }
// processingUserInput(age)


function operate (a,b,callback){
    callback(a,b);
}
function add(a,b){
    console.log(`The addition of two numbers is: ${a+b}`);
}
operate(5, 10, add);
function subtract (a,b){
    console.log(`The subtraction of two numbers is: ${a-b}`);
}
operate(10, 5, subtract);
function multiply (a,b){
    console.log(`The multiplication of two numbers is: ${a*b}`);
}
operate(5, 10, multiply);
function divide (a,b){
    console.log(`The division of two numbers is: ${a/b}`);
}
operate(10, 5, divide);

