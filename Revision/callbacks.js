/*  callbacks :-- a func which is passed as argument to another function 
*/
function order() {
    console.log("Order's food");
}
function prepare() {
    console.log("Start prepation");
}
prepare();
order();

//---------------------------------------------------
function order(callprepare){
    console.log("order's food");
    callprepare();
    callprepare();
}
// callback func
function prepare(){
    console.log("start preparation");
}
order(prepare);