
//The splice() method adds new items to an array.
const fruits = ["Apple", "Banana", "Kiwi"];
//let fruit = fruits.splice(2 ,0, "Mango");
//The first parameter (2) defines the position where new elements should be added 
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters  define the new elements to be added

//console.log(fruit);


//to remove element
let fruit = fruits.splice(0, 1);
console.log(fruit);