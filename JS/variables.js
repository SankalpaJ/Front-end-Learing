// var is "functional scope" &  it can be reassigned
// let & const are "block scope" it can't be reassigned.

var a = 10;
console.log(a);

let a = 20;
console.log(a);

const pi = 3.142;
// pi=3.14;
console.log(pi);

function sqr() {
    var a = 10;
    console.log(a);         // 10
}
console.log(a)             // 10

//-----------------------------------------
