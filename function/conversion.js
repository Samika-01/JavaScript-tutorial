
function toCelcius(fahrenheit){
    return (5/9)* (fahrenheit-32);
}

let celcius = toCelcius(77);
document.getElementById("demo").innerHTML = 
"It is:" + celcius;
