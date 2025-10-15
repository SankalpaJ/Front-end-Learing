// 2 ways to declar an array   1) []    2) constructor
// using []
let num = [1, 2, 3, 4, 5];
console.log(num);   // [ 1, 2, 3, 4, 5 ]

// using constructor = "new" keyword
let colors = new Array("Red", "Pink", "Blue", "Green");
console.log(colors);   // [ 'Red', 'Pink', 'Blue', 'Green' ]

/* d/f methods in Arrays...
  1) push
  2) unshift
  3) pop
  4) shift --- remve 1st ele
  5) splice -- Delete, Add or Insert spcific ele in array (start index, deleteCount, item1, item2,...)
                  hence this will afftect to Original arrya.
  6) slice -- (start, end) - doesn't change original array...
 */

// Adding Ele:--  push()
colors.push("White..");
console.log(colors);    // [ 'Red', 'Pink', 'Blue', 'Green' ]

// unshift
let numbers = [1, 2, 3, 4];
numbers.unshift(0);
console.log(numbers);    // [ 0, 1, 2, 3, 4 ]

// Removing ele:--  pop()
let fru = ["apple", "banana", "cherry", "Pink"];
fru.pop();
console.log(fru);  //  [ 'apple', 'banana', 'cherry' ]

// shift
let arr = ["Anu", "Manu", 1, 2, 3];
arr.shift();
console.log(arr);  // [ 'Manu', 1, 2, 3 ]

let color = new Array('Red', 'Pink', 'Blue', 'Green', 'White..');
console.log(color);    // [ 'Red', 'Pink', 'Blue', 'Green', 'White..' ]

// Modifying & accessing ele:-- splice(start index, deleteCount, item1, item2,...)
let numb = [1, 3, 4, 6, 7, 9]
numb.splice(2, 2);
console.log(numb);  // [ 1, 3, 7, 9 ]

// inserting... & hence this will afftect to Original arrya....
color.splice(2, 2, "black", "Orange");
console.log(color);  // [ 'Red', 'Pink', 'black', 'Orange' ]

// slice()----  doesn't change original array...
let num1 = new Array(10, 20, 30, 40, 50);
console.log(num1.slice(1, 2));   // [ 20 ]
console.log(num1);  // [ 10, 20, 30, 40, 50 ]

// Array Searching & Sorting:---  sort()
let fruits = ["banana", "apple", "mango", "guva"]
fruits.sort();
console.log(fruits);   // [ 'apple', 'banana', 'guva', 'mango' ]

// indexOf()
let fruits1 = ["banana", "apple", "mango", "guva"]
let index = fruits1.indexOf("guva");
console.log(index);    // 3

// includes() 
let animals = ["cat", "dog", "hen", 3, 2];
console.log(animals.includes("hen"));   // true

// reverse()
let digits = [100, 200, 300, 4000];
console.log(digits.reverse());   // [ 4000, 300, 200, 100 ]

// Array iteration Methods:---  forEach()
let num2 = [1, 2, 3,  4, 5];
num2.forEach(f => console.log(f));   // 1 2 3 4 5 ==> new line printsss

// map():-- creates & retuns a new array
let sqr = [1, 2, 3];
let newarr = sqr.map(f =>f * f);  
console.log(newarr);    // [ 1, 4, 9 ]

// filter():--  creats new array with ele that pass test
let even = [1, 2, 3, 4, 5, 6]
let evenNum = even.filter(ev => ev % 2 == 0);
console.log(evenNum);  // [ 2, 4, 6 ]

// reduce(acc, currNum)
let even1 = [1, 2, 3, 4, 5, 6]
let evenNum1 = even1.reduce((acc, num) => acc + num, 0);
console.log(evenNum1);  // 21

// concat(): Combines two or more arrays and returns a new array.
let arr1 = [2,4,6];
let arr2 = [1, 3, 5];
let res = arr1.concat(arr2);
console.log(res);   // [ 2, 4, 6, 1, 3, 5 ]

// join():  joins all ele
let words = ["Hello", "World"];
let sent = words.join(" ");
console.log(sent);   // Hello World

// checking palidome or not using d/f methods
let x = prompt("Enter a number");
let org = x;
let split_arr = x.split('');
let rev_arr = split_arr.reverse();
rev_arr = rev_arr.join();

if(org == rev_arr){
  console.log("its a palidrome.");
} else {
  console.log("its not a palidrome.")
}


