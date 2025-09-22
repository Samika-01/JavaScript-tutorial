//After a function has been stored in a variable, the variable can be used as a function:

const x = function(a, b){
    return a * b;
    
}

let y = x(5, 5) * 2;
console.log(y);