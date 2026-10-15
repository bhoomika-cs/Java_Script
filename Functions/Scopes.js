//two types of scope in js
// Global Scope and Local Scope
const first = 500
function scope(){
    const a = 10
    let b = 20
    var c = 30

    console.log(first); 
}
scope();
console.log(c);// QUESTION

//console.log(a); // a will not be printed as const is a blocked scope variable
//console.log(b); // b also not printes as let is also a blocked scope variable

 if(true){
     const a = 100
     let b = 200
     var c = 300
 }
//console.log(a);
//console.log(b);
console.log(c);




