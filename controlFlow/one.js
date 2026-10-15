// Control flow satements are used to control the flow and perform comparision
//Control flow is the order in which the computer executes statements

//Comparision operator ->( <, >, <=, >=, !=, == (comparision), === (checks type, comparision))

if(2 == 2){ //the statement will run only when the condition is true
    console.log("Equal"); 
}

if(2 === "2"){
    console.log("Equal"); // this will never execute as the type of both 2 are different so the condition will become false
    
}
const marks = 80
if(marks >= 50)  console.log("You passed the test!!"); // This is also correct as the whole statement is written in a single line, no {} are needed

// using logical operator

const UserLoggedIn = true
const DebitCard = false

if(UserLoggedIn && DebitCard){ // executes if only when both conditions are true (AND)
    console.log("Successfull!!");
}else{
    console.log("Error!"); // executes when a condition is false
}

if(UserLoggedIn || DebitCard){ // one value can be true (OR)
    console.log("Executes");
}else{
    console.log("Else will execute");
    
}
