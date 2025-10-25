
const person = {
    firstName : "Smrina",
    lastName : "Thapa",
    age : 23,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

name = person.fullName().toUpperCase();
console.log(name);