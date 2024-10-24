let isLoggedIn = true;

if(isLoggedIn){
    console.log("User has been loged in")
}

let score = 75;

if(score >= 0 && score <= 40){
    console.log("Failed");
}else if(score > 40 && score <= 59){
    console.log("Pass");
}else if(score >= 60 && score <= 100){
    console.log("Pass with good marks.");
}else{
    console.log("Waiting for result");
}

let month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    
    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Please enter month number between 1 and 12");
        break;
}

/**
 * False value
 * false, 0, -0, null, '', undefined, NaN, bigInt 0n
 */

/** 
 * Nullish Coallescing Operator (??) null, undefined
 */ 

// let val1;
// val1 = 45 ?? 75

// console.log(val1);


/**
 * Ternoray operator
 */

(true) ? console.log(true) : console.log(false);
