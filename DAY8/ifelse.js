var d = new Date();
var time = d.getHours();
if (time < 12) {
    console.log( "good morning");

}else
console.log( 'good afternoon');





function performance(x, y, action){
    if(action == '+'){
        console.log(x+y);
    }else {
        console.log('give proper action');
    }
}
//performance(10, 5, '+');
performance(10, 5, '-');
