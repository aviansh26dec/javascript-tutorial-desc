// Immediately Invoked Function Expressions 

/**
 * Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed 
 * immediately after they are defined. They are typically used to create a local scope for 
 * variables to prevent them from polluting the global scope.
 */

/**
 * IIFE are executed immediately after they are defined. And It is prevent them from polluting 
 * the global scope.
 */

(function(){
    console.log("Connected to server one");
})();

((name) => {
    console.log(`Hi ${name}, You are connected with server two.`);
})("Avinash");

(async(name) => {
    console.log(`Hi ${name}, You are connected with server two.`);
})("Siddharth");