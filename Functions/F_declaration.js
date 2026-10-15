// Fuctions can be declared in multiple ways

// 1. Using name -> using function keyword and defining its name then scope

function one(num1){
    return num1 + 1
    
}
one(2)

// 2. Expression -> The fuction will get stored in variable

const two = function(num){
    return num + 2
}
console.log(two(4))
