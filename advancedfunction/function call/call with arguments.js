
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + " is from " + city + "," + country; 
    }
}
const person1 = {
    firstName: "Sanji",
    lastName: "Vinsmoke"
}

let x = person.fullName.call(person1, "Tokyo", "Japan");
console.log(x);