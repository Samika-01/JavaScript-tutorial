
// to find largest number

function findMax() {
    let max = -Infinity;
    for(let i = 0; i< arguments.length; i++){
        if( arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
let x = findMax(1, 4, 55, 88, 300);
console.log(x);

// to find the summ of all numbers

function findSum(){
    let sum = 0;
    for( let i = 0; i < arguments.length; i++){
        sum+= arguments[i];
    }
    return sum;
}

let y = findSum(2, 3, 4,5);
console.log(y);