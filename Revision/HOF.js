/*   HOF(Higher order function)
      1) another func as argument(i/p)
      2) return func as o/p

in-built HOF: 1) Map
              2) Filter
              3) Reduce
    1) Map :- which list of parameters & that accpts another functon as argument to d "map func"
    2) Filter:- 
    3) Reduce:- whichh accpets arrayList -- || --
*/
 
 function x(cally) {
    var a = 10;
    cally(a);
}
x(function y(a){
    console.log(a);   // 10
});            
//-----------------------------------------------------------------
// HOF 2nd 
function x(){
    var a = 10;
    return function y() {
        console.log(a);
    }
}
var z = x();
console.log(z);
z(); 
 /* to see what z  their in "z" we declared "var z" & printing it o/p as below
    [Function: y] 
      10
*/