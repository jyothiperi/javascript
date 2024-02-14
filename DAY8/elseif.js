function performOperation(x, y, action){
    if (action === '+'){
        console.log(x+y);
    }else if (action === '-'){
console.log(x-y);
    }
     else if (action === '/'){
        console.log(x/y);
     }else {
        console.log( 'pass valid action');
     }   
    }
//performOperation(20,10,'+');
//performOperation(20, 20, '-');
//performOperation(20,10, '/');
performOperation(20, 10, '*');





var d = new Date();
var time = d.getHours;
if(time < 12){
    console.log('good morning');
}else if (time >12 && time < 14){
    console.log('good afternoon');

}else {
    console.log( 'good night');
}

