//THIS keyword -> refers to the current context of the function
//mainly used with objects 
// When a regular function is invoked as a method of an object (obj.method()),
// this points to that object. standalone it refers to undefined or a global object

const obj={
    username : "Bhoomika",
    age : 21,
    welcome : function(){
        console.log(`Good Morning, ${this.username}`);
        console.log(this);
        
    }
}
obj.welcome()
obj.username = "Khushi"
obj.welcome()

// function one(){
//     const username = "Bhoomi"
//     console.log(this.username); // it will return undefined as the "this" is not used like this it should be with some objects
    
// }
// one()

// Arrow function -> it is a shorter way of writting the fuctions it works same but some semantics are different

// normal function
function one(){
    console.log("hello!!");
}
one()

// Arrow function

const two = (a,b) => a + b // it returns the value implicitly as there is only one expression we do not have to use return statement

console.log(two(3,4))
