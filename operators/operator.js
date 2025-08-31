
/*
let name = null;
let age = 23;
let result = name ?? age;

document.getElementById("demo").innerHTML = result;
*/


//The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {
    type: "Fiat" , model: "500"
};

document.getElementById("demo").innerHTML = car ?. name;