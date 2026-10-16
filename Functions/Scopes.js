//two types of scope in js
// Global Scope and Local Scope
const first = 500
function scope(){
    const a = 10
    let b = 20
    var c = 30

    console.log("Inner ", first); 
}
scope();
console.log(c);// var c will not be accessible outside the function as the function crates its own scope

//console.log(a); // a will not be printed as const is a blocked scope variable
//console.log(b); // b also not printes as let is also a blocked scope variable

 if(true){
     const a = 100
     let b = 200
     var c = 300
 }
//console.log(a);
//console.log(b);
console.log(c); //conditional statements do not have their own scope

if(true){
    const FirstName = "Bhoomika "
    if(true){
        const lastName = "Rathod"
        console.log(FirstName + lastName); // this will print as it is under the scope
        
    }
    console.log(lastName);  // this can not be printed as the access is out of the scope

}
console.log(FirstName); // same as above, not printed










