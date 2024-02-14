var d = new Date();
var time = d.getHours();
if (time < 12) {
    console.log( "Good morning");// doesn't give any result because there is only one condition

}

function performance (x, y, action){
    if(action == "+"){
        console.log(x+y);

    }
}
//performance(10,5, "+");
performance(10,5, "-");


