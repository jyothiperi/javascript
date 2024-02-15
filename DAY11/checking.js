var myobject = {
    name: 'sree',
    ID: 123,
    locations: 'sweden',
}
function checkobj(checkprop){
    if (myobject.hasOwnProperty(checkprop)){
        return myobject[checkprop];
    }
    else{
        return "change me!";}
 
}
console.log(checkobj(" ID"))