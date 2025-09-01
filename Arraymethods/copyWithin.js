
const fruits = ["Apple", "Banana", "Mango", "Kiwi"];
//let fruit = fruits.copyWithin(2, 0);// copy element to [2]from[0]= Mango <- Apple
let fruit = fruits.copyWithin(2, 0, 2);
console.log(fruit);