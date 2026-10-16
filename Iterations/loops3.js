// for of loop

const arr = ["Java","Python","C++"]
for (const sub of arr) {
    console.log(sub);
        
}
const greetings = "Hello World"
for (const greet of greetings) { // prints each character 
    if(greet == " "){          // skips the space
        continue;
    }
    console.log(greet);    
}

//Map -> map object holds key-value pairs and remembers the original insertion order of the keys

const one = new Map()
one.set("name","Bhoomi")
one.set("name2","Harshita")
one.set("name3","Khushi")
one.set("name3","Khushi")  // it ignores duplicate value
// console.log(one);

//map with for-of

// for (const [key, value] of one) { // writing key value in [] makes it more readable and not in array form
//     console.log(key,":-" ,value);
    
// }

//for-in
const obj ={
    name : "Bhoomi",
    age : 21,
    rollno : "D05"

}
for (const key in obj) { //for in prints object
    console.log(key, " :- " ,obj[key]);// this prints key and values of the object
      
}

for (const key in one) {
   console.log(one[key]); //map is not iterable
}

//for-each loop

const sub = ["java","python","C++","ruby"]

sub.forEach( function(item){
    console.log(item);
    
} )

sub.forEach( (val)=> { // for each using arrow function
    console.log(val);
} )

// objects  using foreach

const mycoding =[
    {
        subname : "java",
        filename : "java"
    },
    {
        subname : "python",
        filename : "py"},
    {
        subname : "javascript",
        filename : "js"
    }
]

mycoding.forEach( (item)=> {
    console.log(item.filename , item.subname);
    

} )

//filter

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const number = mynum.filter( (num) => num > 5 )
console.log(number);
 

