// Javascript Execution Context
// ----Global Execution Context (this)
// ----Function Exection Context
// ----Eval Execution Context

// How to run code in javascript
// ---- Memory Creation Phase/Creation Phase (In this memory allocation)
// ---- Execution Phase

// Example

var val1 = 10;
var val2 = 5;

function add(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addNum(va11, va12);
let result2 = addNum(10, 2);

//Execution Steps of above code line by line
// Phase1: Global Exectuion (this is initialized)

/**
 * Phase2: Memory Phase
 * val1 -> undefined
 * val2 -> undefined
 * addNum -> defination
 * result1 -> undefined
 * result2 -> undefined
 */


/**
 * Phase3: Exection Phase
 * val1 -> 10
 * val2 -> 5
 * addNum -> when we call any funtion its create new executional context (new variable environment + exectution thread ), after completion this context has been deleted.
 *           Phase1: Memory Phase
 *           val1 -> undefined
 *           val2 -> undefined
 *           total -> undefined
 * 
 *           phase2: Exectuion Phase
 *           num1 -> 10
 *           num2 -> 5
 *           total -> 15
 * 
 * result1 -> 15
 * Call next funtion
 * addNum -> when we call any funtion its create new executional context (new variable environment + exectution thread ), after completion this context has been deleted.
 *           Phase1: Memory Phase
 *           total -> undefined
 * 
 *           phase2: Exectuion Phase
 *           num1 -> 10
 *           num2 -> 2
 *           total -> 12
 * 
 * result1 -> 12
 */



/**
 * JavaScript uses a Call Stack to track the functions in a program. The call stack works on the Last In, First Out (LIFO) principle. 
 * This means that the most recently called function will be the first to be completed. 
 * Whenever a function is called, a new frame is added to the top of the stack.
 */

// |                  |
// |                  |
// |  four=()         |
// |  three=()        |
// |  two=()          |
// |  one=()          |
// |  Global Variable |
// |__________________|
// 