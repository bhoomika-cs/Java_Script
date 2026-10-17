//OBJECTS IN JAVA SCRIPTS - 

/* Objects in JS are data types.
it is used to store data in key-pair form and works on more complex data.
Objects can be created using object() constructor or literal syntax.
 */
const mysym = Symbol("key1")
const MyObj = {
    name : "Bhoomi",
    age : 21,
    [mysym] : "key1", // always write symbol in [] to keep the type as symbol.
    email : "bhoomi@gmail.com",
    IsloggedIn : true
}

console.log(MyObj); // prints the whole object.
console.log(MyObj.name); // prints the name from the object.(Dot Notation)
console.log(MyObj["name"]); // prints the name from the object. (Suggested). (Bracket Notation)

//freeze() -> used to freeze the object, and do not allow any changes in the object after freezing it.

//Object.freeze(MyObj) // freezes the object MyObj.

//MyObj.name = "Bhoomika" 
//console.log(MyObj["name"]) //it will return "Bhoomi" not "Bhoomika".

//Functions in object.

MyObj.greeting = function(){
    console.log("Hello User!");
}
MyObj.greeting2 = function(){
    console.log(`Hello ${this.name}! Good day!`); // prints name using string interpolation. Also "this" keyword is used to refer same object.
}
console.log(MyObj.greeting());
console.log(MyObj.greeting2());

//Object declaration using sigleton and constructor

const NewObj = new Object() // Creates an empty singleton object
console.log(NewObj);

const user = {} // Creates an empty non-singleton object

user.email = "bhoomi@gmail.com"
user.name = { // Can create nested objects
    username : {
    firstname : "Bhoomika",
    lastname : "Rathod"
    }
}
console.log(user.name.username); //prints the nested object.

// Merge two or more object together.
const obj1 = { 1 : "a" , 2 : "b" }
const obj2 = { 3 : "c" , 4 : "d" }

const obj3 = Object.assign(obj1 , obj2) // assign method is used to add different objects into one.

console.log(obj3);

const obj4 = {...obj1, ...obj2} //Spread method can be used to merge objects.

console.log(obj4);

//Array of Objects 
const arr = [
    {
        name : "Bhoomi",
        Email : "bhoomi@gmail.com"
    },
    {
        dept : "CSE",
        roll : "D05"
    },
    {
        add : "nagar",
        city : "Indore"
    }
]
console.log(arr[2]);

console.log(Object.keys(MyObj)); // displays the objects as array(Keys)
console.log(Object.values(MyObj));//(values)

console.log(MyObj.hasOwnProperty("greeting")); //hasOwnProperty method is used to check if the property is available or not

//there are more methods used with object

//De-Structuring of objects -> It extract the property of the object and stores its value into a variable 

const Student = {
    name : "Ram",
    age : 22,
    rollno : 101
}
const {name  , age } = Student //Extracted the property 
const {name : Sname , age : Sage} = Student //stored the values of property into variables


console.log(Sname);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
//JSON -> it is a format used to make communication between applications, Mainly used when frontend communicates with backend

{
    "name" : "Bhoomi",
    "age" : 21                 //this is the format, property name should always be in " ".
}

[
    {},
    {},
    {}
]


