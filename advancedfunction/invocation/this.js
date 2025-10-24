
const myObject = {
    firstName: "John", 
    lastName: "Doe",
    fullName: function(){
        return this.firstName + " " + this.lastName; //John Doe
        return this;//{ firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }
    }
}
console.log(myObject.fullName());