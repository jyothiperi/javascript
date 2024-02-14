var mydata = [10,20,30,40,50,60,70];
var newdata = mydata.filter(function(element,index){
    console.log(element, index);
    return element<60;
})

var data = [ 10, 20, 40 ,14, 15, 79, 43];
var newda = data.filter(function(element, index){
    console.log(element, index);
    return element < 30;
})
console.log(newda);
