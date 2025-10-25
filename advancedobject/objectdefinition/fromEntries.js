
//The fromEntries() method creates an object from iterable key / value pairs.

const fruits = [
    ["apples", 300],
    ["banana", 200],
    ["mango", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj.apples);  //300
console.log(myObj.mango);  //500