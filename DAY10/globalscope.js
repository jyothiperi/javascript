var myglobal = 10;
function fun1(){
    ooopsglobal = 5;
}
function fun2(){
    var output = "  ";
    if (typeof myglobal != "undefined"){
        output = " myglobal :" + myglobal + " ; ";

    }
    if (typeof ooopsglobal != "undefined"){
        output += "ooopsglobal:" + ooopsglobal;
    console.log(output);
    }
}
fun1();
fun2();
