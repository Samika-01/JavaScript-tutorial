
const person = {};

person.name = "Luffy";
person.age = 20;
person.character = 'lead';
person.anime = "One Piece";

document.getElementById("demo").innerHTML = 
person.name + "is" + person.character + "in" +
person.anime;