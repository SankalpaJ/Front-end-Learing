/*  Lexical evnt:--
       lexical => hireacrhy(tree structure) nothing but "local scope" + "lexical scope"(parent scope) bundeled together
       when ever we want to achvive this we must have "nested function"

Scope chaining:-- it refers to lexical scope which connects from one local scope to another..
             using reference it will start searching from 1 local scope to another scope for "var & func"
*/

var  a = 10;
function x() {
    var a = 10;
    function y() {
        console.log(a);    // 10
    }
    y();
}
x();
//-----------------------------------------------------

let  globalVar = "I am global!";

function outer(){
    let a = "I'm in the outer function.";

    function inner(){
        let b = "I'm in the inner function!!";
        console.log(globalVar);  //  Accessable: I am global!
        console.log(a);     // Accessable: I'm in the outer function.
        console.log(b);    // Accessable: I'm in the inner function!!
    }
    inner();
}
outer();