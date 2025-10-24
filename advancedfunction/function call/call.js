
const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Luffy",
    lastName: "Monkey"
}
const person2 = {
    firstName: "Zoro",
    lastName: "Roronoa"
}

console.log(person.fullName.call(person2));