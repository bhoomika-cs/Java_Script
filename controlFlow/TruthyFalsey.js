const name = ""

if(name){
    console.log("Truthy");
}else{
    console.log("falsey"); 
}

// In js there are some thruthy and falsey values which are considered true or false by default

// Falsey Values-
//false,  0, -0, BigInt 0n , "", NaN, null, undefined

// except these all are thruthy values, some thruthy values are

// "0", "False", " ", [], {}, function(){}, 

// nullish coalecsing operator (??) : null, undefined

val1 = 20 ?? 30
val2 = null ?? 30
val3 = undefined ?? 40
val4 = 10 ?? 20 ?? 30


console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Ternary operator
// condition ? true : false

const price = 50
price <= 100 ? console.log("less than 100") : console.log("Greater than 100");




