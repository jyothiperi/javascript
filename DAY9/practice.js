//print only even numbers from 1-20

function evenNum (initialValue, endValue){
    for (var x = initialValue; x <= endValue; x++ ){
        if (x%2 ==0){
            console.log(x);
        }
    }
}
evenNum(1,20)

//print only odd numbers from 51-70

function oddnum( initialValue, endValue){
for (var a = initialValue; a<= endValue; a++ ) {
    if(a %2 !==0){
        console.log(a);
    }
}
}
oddnum(51,70)

//print 1-10 i reverse order

function reversevalue (s,e){
    for (var i = s; i>e; i--)
    console.log(i)
}
reversevalue(10,0)

