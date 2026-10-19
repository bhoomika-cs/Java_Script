const MyArray = [1, 2, 3, 4, "Bhoomi", true]  
console.log(MyArray);

//Collection of multiple data items in a single variable
//Arrays are resizable

const arr = new Array("bhoomi", "harshita", "khushi")
console.log(arr[2]); //call value by index

//Array Methods

//Push() -> used to add elements into array
arr.push("Kanak")
console.log(arr);

//Pop() -> used to remove the last elements
arr.pop()
console.log(arr);

//unshift() -> inserts the element at the beginning
arr.unshift(5)
console.log(arr)

//shift() -> removes the element from beginning of the array
arr.shift()
console.log(arr);

//includes() -> tells if a value is availble in the array or not
console.log(arr.includes("chhotu")); //Returns boolean value

//indexOf() -> tells the index no. of the searched element
console.log(arr.indexOf("bhoomi"));
console.log(arr.indexOf("Chhotu")); //returns -1 if the value is not found

//Join() -> changes the type of array to string
const newarr = arr.join()

console.log(arr); //type = array
console.log(newarr); // type = string
console.log(typeof newarr);

//slice() -> used to take a portion of the array and make a new array from it, but it does not change the original array

const fruits=["apple", "banana", "mango", "orange", "kiwi"]

const result = fruits.slice(1,5) //took the element till 4th index because slice do not includes range
console.log(result);
console.log(fruits);//the original index is not changed, it remains same

//splice() -> used to replace, remove or insert the element in the array, the array changes unlike in SLICE

fruits.splice(0, 0, "Guava") // add guava at 0th index with 0 element deleted - (0, 0 ,"guava") - 0 = index value, 0 = deleted items , guava = value to be inserted
console.log(fruits);

fruits.splice(0, 1, "Papaya")
console.log(fruits);

fruits.splice(1,3)
console.log(fruits);

//concat() -> adds 2 or more array together

const newarray = arr.concat(fruits) //adding arr and fruits together intoa single array named newarray 
console.log(newarray);

//spread() -> adds 2 or more arrays together works same as concat but is more efficient

const newarray2 = [...arr, ...fruits]
console.log(newarray2);

//flat() -> used to make the nested array into a single array

const numbers = [1, 2, 3, [4, 5, 6] ,7, 8, [9, [5, 6, 7]]]
const another_arr = numbers.flat(Infinity)
console.log(another_arr);

//isArray() -> used to check whether the variable is array or not

console.log(Array.isArray(arr));

//from() -> used to convert into array

console.log(Array.from("Bhoomi"));

//of() -> used to make array out of different set of elements

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1, score2, score3));






















