//IIFE - Immediately Invoked Function Expression. 
//a JavaScript function which runs as soon as it is defined.

(function MyFunction(/*parameter */){
    console.log("Hello everyone!");
    
})(/*argument can be passed here */); // in IIFE the whole function is wrapped inside a () and to invoke the function just a () is enough no function name is needed.
// when writting two or more IIFE always terminate it with semicolon ; otherwise it will give error
//IIFE using Arrow function

((name) => {console.log(`Hello ${name}`) })("Bhoomi"); 