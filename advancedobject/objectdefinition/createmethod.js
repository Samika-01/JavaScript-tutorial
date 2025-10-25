
const person = {
    firstName: "John",
    lastName: "Doe"
}

const man = Object.create(person); // Create a new object from the prototype of another project.
man.firstName = "Gojo";

console.log(person.firstName + "," + man.firstName);