
const person = {
    firstName : "JOhn",
    lastName : "Doe",
    age : 50
};

let text = "";
for( let [key, value] of Object.entries(person)){
    text += key + ":" + value + "<br>";
}

console.log(text);