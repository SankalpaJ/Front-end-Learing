/* this z how d Js code z executed
GEC ==> Global exection contrast
    js gives control to js engine(V8) & it as 2 phases
        i) Memory phase  ==> Memory creation will happens before code exectue for "var & func"
                   & it is allocated in form of "Key-value" pairs.

        ii) Code phase ==> code exection will happens
         Js z both scripting & intruprted programming language.
         here also it exceuts code "line-by-line".

In Java memory phase & code phase will be done simultanously but 
 in JS 1st "Memory" & next will be "Code" phase.

 ""call stack""  will store this GCE it means whole GCE will be always stored inside d "call stack".
 its like container...  1st it as GCE & when we call func it will create separate call stack for that (add()) in it.
 it is similar to stack in java.

==> any variable declared using "var" keyword d default value =====> "undefined".
when ever we declar a func for that d "key z func_name" & "value is its func_block"

variable hosting:-- before declared it can be used & memory will also be created to that variable..
=> scope = access
=> hoisted = memory allocated
variable hoisting :-- i) var  ==> undefined
                      ii) let ==> TDZ
                      iii) const  ==> TDZ

d variable which are defined using "let & const" are also hoisted but in d/f memory phase so we get error "refrence error or etc"
bcz they are in "temporal dead zone" when we give value to it, then they get life. util they are in TDZ..

for this memory z allocated in TDZ before decalration..
basically we tell they are "not hoisted"
*/

console.log(a);      // undefined --- variable Hositing can happens
var a = 10;
function add() {
    var b = 20;       // b  & c are functional scope which z inside function
    var c = b + b;
    console.log(c);    // 40
}
add();
console.log(a);   // 10
//---------------------------------------------------------------
var a = 10;
function x() {
    var  b = 20;
    console.log(b);   // 20
}
x();
function y() {
    var c = 30;
    console.log(c);    // 30
}
y();
console.log(a);     // 10

/* function hoisting: 
        i) func declartion  ==> can be hoisted
        ii) func expression  ==> can not be hoisted
        iii) arrow func     ==> can not be hoisted
    ==> anything which is declared using "function declartion" are hoisted...
        therefore anything "function Expression & arrow function" are not "hoisted" bcz they are decalred using variablels.
*/
