/* clouser's are nothing but when a variable as some value & it is stored in memory
    after executing some block of that particular func variable that is  will be  
    deleted from memory and that value can be accessed using lexical scope concept of "reference value"

ex: if ur mom going trip for 1 week & she made some snacks to eat for u
    & she went. now u can access that sncaks & it is in home itself right when she is not their also
    u can access food and eat it.

==> A closure is created when a function "remembers" the variables from its surrounding lexical scope even after that scope has exited. 
   It’s like having a superpower where a function can hold onto the environment in which it was created.
*/
function x() {
    var a  = 10;
    return function y() {
        console.log(a);   // 10
    }
}
var z = x();
z();