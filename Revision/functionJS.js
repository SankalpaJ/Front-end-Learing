/*  
  1) function declartion
  2) function expression
  3) Arrow Function
*/
// function declartion:-- 
function square(num) {
    return num * num;
}
console.log(square(5));     // 25

// function expression:--  when u want to retrun value
let square = function(num) {
    return num * num;   
}
console.log(square(5));      // 25

// Arrow fuction
const sqr = (num) =>  num * num;
console.log(sqr(4));            // 16


