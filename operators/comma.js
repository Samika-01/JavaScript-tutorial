//Each expression is evaluated from left to right.
//The final result of the expression is the rightmost value.

let n1 , n2;
const res = (n1 = 1, n2 = 2, n1 + n2); // n1+n2 will be the result
console.log(res);