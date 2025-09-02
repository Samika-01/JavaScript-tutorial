

//When the slice() method is given two arguments, 
// it selects array elements from the start argument, 
// and up to (but not included) the end argument:

const fruits = ["Apple", "Mango","Kiwi", "Banana"];
const fruit1 = fruits.slice(0,3);
const fruit2 = fruits.slice(1);
const fruit3 = fruits.slice(2);
console.log(fruit1,fruit2,fruit3);