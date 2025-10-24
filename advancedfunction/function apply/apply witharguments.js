
//The apply() method accepts arguments in an array:
const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + " is from " + city +"," +country;  

    }
}
const person1 = {
    firstName: "Usopp",
    lastName: "King"
}

console.log(person.fullName.apply(person1, [ "Tokyo",  "Japan"]));
