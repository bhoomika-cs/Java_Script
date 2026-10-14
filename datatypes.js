let OneName = "33bhoomi"

let Num = Number(OneName) // converting String into Number
 
console.log(typeof (Num)); // displaying the type of variable Num

// typeof is used to see the type of the data

/* data are categorised into two catogaries Based pn how the data is stored and accessed from the memory

-> Premitive  
- call by value 
- change the value by copying it

-> Non-premitive / Reference type
- arrays
- objects
- functions

*/

//Array
const myArray = ["Bhoomi", "Harshita" , "Khushi" ]

//Object
let MyObj = {
    name : "bhoomi",
    age : 21,
    rollno : "D05"
}
console.log(MyObj);

//Function
let MyFunction = function(){
    console.log("Hello world")
}
MyFunction();

console.log(typeof MyFunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//two major types of memory

/* stack and heap
Stack (Premitive DataType)-> It gives the copy of the variable when change in value
Heap (Non-Premitive DataTypes) -> It gives the Reference of the original value from the memory
*/

let Name = "Bhoomika"
let Name2 = "Harshita"
Name2 = Name

console.log(Name2);
console.log(Name);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Strings
// STRING INTERPOLATION
// Using backtick(``) we can inject the variable inside a sentence

const Myname = "bhoomi"
const lastname = "rathod"

console.log(`My name is ${Myname.toUpperCase()} and my surname is ${lastname.toUpperCase()}`);
console.log(Myname.indexOf("m"));

/*String Methods
touppercase()
tolowercase()
indexOf()
substring()
trim()
slice()
charAt()
includes()
replace()
split()
*/

let one = "hello"

console.log(one.concat(" world"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Numbers

const score= 100// implicitly defines that it is a number

const marks = new Number(200)// Explicitly defines that it is a number

console.log(score);
console.log(marks);

/*Number Mthods
toString()
toFixed()
toPrecision()
toLocaleString() can add ('en-IN') to change the format to indian 

*/

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Maths Function

/*
Math()
Math.abs(-2) -> Changes the negetive value to positive
Math.round() -> Rounds the value
Math.ceil() -> will choose upper value always. ex- 4.2  = 5
Math.floor() -> will chhose lower value always. ex- 4.2 = 4
Math.random() -> will always generate value between 0 and 1
*/

console.log(Math);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Date and time

let myDate = new Date()

console.log(myDate.toString());






















