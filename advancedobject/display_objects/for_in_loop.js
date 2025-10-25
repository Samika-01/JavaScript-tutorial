
const person = {
    firstName : "JOhn",
    lastName : "Doe",
    age : 50
};

let text = "";
for(let x in person){
    text += person[x] + " ";
};
console.log(text);

