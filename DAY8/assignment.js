// to determine a number is positive or negetive

function num(x){
    if(x < 0){
        console.log( 'negetive');
    }else if (x > 0){
        console.log( 'positive');
    }else {
        console.log( 'undefined');
    }
}
//num(1);
//num(-3);
num();



//To determine a number is positive or negetive

function evenOdd(x){
    if(x % 2 === 0){
        console.log(' even number');
    } else {
        console.log( 'odd number');
    } 


}
//evenOdd(22);
evenOdd(11);




//finding designation based on age

function designation(x){
    if((x >= 18) && (x <=20)){
        console.log(' junior developer');
    }else if ((x >= 21) && (x <= 24)){
        console.log( 'senior developer');
    }else if ((x >= 25) && (x <= 30)){
        console.log( 'Ast manager');

    }else if (x >= 31){
        console.log( 'manager');

    }else {
        console.log( 'undefined');
    }
}
//designation(18);
//designation(23);
//designation(25);
//designation(32);
designation();




//calculator

function calculator(x, y, action){
    switch (action){
        case '+':
            console.log(x+y);
            break;

            case '-':
                console.log(x-y);
                break;

                case '*':
                    console.log(x*y);
                    break;

                    case ' /':
                        console.log(x/y);
                        break;
                }
}
//calculator(2, 3, '+');
//calculator(2, 3, '-');
//calculator(2, 3, '*');
calculator(2, 3, '/');



