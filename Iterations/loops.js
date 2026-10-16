// for

for (let i = 1; i <= 10; i++) {
    const element = i
    if(i == 5){
        console.log("This is number 5");
    }
    console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     console.log("Outer loop value " + i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + i*j);   
//     }    
// }

// loop with array

const myarray = ["HTML", "CSS", "JS"]

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
}

//Break and Continue

// for (let index = 0; index <= 10; index++) {
//     if (index == 5) {
//         console.log("Found 5!");
//         break;        // break is used to break a condition 
//     }
//     console.log(index);
// }

for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log("Found 5!");
        continue;        // continue skips a condition once and then continues
    }
    console.log(index);
}