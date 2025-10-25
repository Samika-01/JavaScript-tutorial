

//create target object
const person1 = {
    firstName : "Tanjiro",
    lastName : "Doe",
    age : 20,
    eyeColor: "blue"

};

//create source object
const person2 = {
    firstName : "Giyuu",
    lastName : "Smith"
};

//Assign source to target i.e person2 to person1
console.log(Object.assign(person1, person2));