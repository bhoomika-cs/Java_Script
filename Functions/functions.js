//FUNCTIONS IN JS -> Functions are a block of code which performs some task, 
// instead of writing the code again-n-again we can write it inside the function and reuse it wherever we want.

function Greet(){ //input taken in () are called parameter
    console.log("Hellooo!!"); 
}
Greet(); //Executes the function, value passed in the () are called arguments

//create function to add two numbers

function addition(){
    let a = 20
    let b = 30
    let c = a+b
    console.log(c);
}
addition()

// Another way

function addition(a,b){
 /*  let c = a + b
   return c  // return returns the value, the statements written after return will never be executed
   console.log("won't be executed"); //unreachable code*/
   
   return a+b
}
let c = addition(2,4)
console.log(c);

//REST OPERATOR in Function -> used to pass multiple values in a parameter

function calculatecartitem(...num1){ //by using the rest operator we can pass multiple values.
    return num1
}
console.log(calculatecartitem(200, 400, 500, 600))

function calculatecartitem(val1, val2, ...num1){ //this is wrong syntax.
    return num1
}
console.log(calculatecartitem(200, 400, 500, 600))

//Objects can be passed as parameters in function


function handleObject(someobject){
    console.log(`hello ${someobject.name}. The price is ${someobject.price}`);
    
}
handleObject({
    name : "bhoomi",
    price : 500
})

//Arrays can be passed as parameters in function

function getarray(anyarray){
    return anyarray[2]
}
console.log(getarray([1, 2, 3, 4, 5]))