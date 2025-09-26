
//Arrow Function with a parameter.
// let hello = (val) => {
//     return "Hello World " + val;
// };
//  console.log(hello("to Coding."));

// function myFunction(x, y) {
//     if (y === undefined){
//         y = 2;
//     }
//     return x * y;
// }
// console.log(myFunction(4)); // y is not defined

function myFunction(x, y = 10){
    return x* y;
}
console.log(myFunction(5)); //If y is not passed or undefined, then y = 10