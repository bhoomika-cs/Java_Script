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

const two = (a,b) => (a + b)
 // it returns the value implicitly as there is only one expression we do not have to use return statement
// if we write the expression in () then we do not have to write return statement but if in {} then return statement is needed
console.log(two(3,4))

const three = (a,b) => ({name : "Bhoomi"})
// if we want to return object we have to write it inside ({ }) otherwise it will return undefined

console.log(three(3,4))

//Parentheses around a single parameter are optional. However, zero or multiple parameters require parentheses.