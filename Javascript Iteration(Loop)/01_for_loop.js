for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

for (let index = 10; index >= 0; index--) {
    const element = index;
    // console.log(element);
}


for(let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++) {
        // console.log(`${i}`);
    }
}

let myArray = ['January','February','March','April','May','June','July','August','September','October','Novemeber','December'];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

/**
 *  The break statement terminates a while or for loop completely.
 */

for (let index = 0; index < 10; index++) {
    if(index == 5){
        break;
    }
    console.log(index);
}


/**
 * The continue statement terminates execution of the statements within a while or for loop and continues the loop in the next iteration.
 */

for (let index = 0; index < 10; index++) {
    if(index == 5){
        continue;
    }
    console.log(index);
}