
let x = "";
const myObj = {
    name : "Sanji",
    age : 21,
    cars: [
        {name: "BMW", models: ["320", "X3"]},
        {name : "Ford", models : ["Focus", "Mustang"]}
    ]
}

for( let i in myObj.cars){
    x+= "<h2>"+ myObj.cars[i].name+ "</h2>";
    for(let j in myObj.cars[i].models){
        x+=  myObj.cars[i].models[j]+ "<br>";
    }
}

document.getElementById('demo').innerHTML = x;