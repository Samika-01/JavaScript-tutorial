
function greet(name, age){
    return "Hello\t" + name + "!\t"+ "\tYou are" +" "+ age + "\tyears old.";
}

//let result = greet("Luffy", 20);
document.getElementById("demo").innerHTML = greet("Luffy", 20);
