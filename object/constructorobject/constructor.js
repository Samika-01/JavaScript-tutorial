
function Person(first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const luffy = new Person("Luffy" , "Monkey", 20, "black");
const zoro = new Person("Zoro", "Roronoa", 21, "brown");

document.getElementById("demo").innerHTML = 
"luffy is " + luffy.age + " and zoro is "  + zoro.age;
