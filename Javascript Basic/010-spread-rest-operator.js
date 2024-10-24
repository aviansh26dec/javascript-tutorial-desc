/**
 * In JavaScript, the rest and spread operators (both represented by ...) serve different 
 * purposes depending on the context in which they are used.
 */

/**
 * Rest Operator
 * The rest operator is used in function definitions or destructuring assignments to 
 * collect multiple arguments or array elements into an array. It allows you to represent 
 * an indefinite number of arguments as an array.
 */

function collectData(...recData){
    return recData;
}

let restData = collectData(1,2,3,4,5,6,7);
console.log('Rest data example');
console.log(restData);



/**
 * Spread Operator
 * The spread operator allows an iterable (like an array or string) to be expanded into 
 * individual elements or properties. It is commonly used in function calls, array construction, 
 * and object literals.
 */
console.log('Example of spread operator');
console.log(...restData);

let a = { a: 'b', b: 'c'};
let b = { c: 'd', d: 'e'};

let c = {...a, ...b};

console.log('object concatinated: '+ c)

/**
 * Key Differences:
 * Rest operator (...) is used to gather arguments into an array.
 * Spread operator (...) is used to expand elements from an array, object, or other 
 * iterable into individual components.
 */
