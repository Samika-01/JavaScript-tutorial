
const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap(x => [x, x*10]);// (1, 10),(2,20)
console.log(newArr);