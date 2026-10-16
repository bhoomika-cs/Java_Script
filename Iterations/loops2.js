// while loop

let i = 0;
while (i <= 10) {
    console.log(`value of i is ${i}`);
    i = i + 2
        
}

//while with array
const myarray = ["Bhoomi","Harshita","Khushi"]
let arr = 0
while (arr < myarray.length) {
    console.log(`value is ${myarray[arr]}`);
    arr++    
}

// do-while loop

let score = 11
do {
    console.log(`the value is ${score}`); // do while prints the statement atleast one even if the condition is false
    score++
} while (score <= 10);