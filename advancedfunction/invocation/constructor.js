
function myFunction(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;

}

const myObj = new myFunction("John", "Doe");

console.log(myObj.firstName);