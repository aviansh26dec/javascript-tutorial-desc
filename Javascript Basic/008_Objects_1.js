let firstobject = {
    0: "a",
    1: "b"
}

let secondtobject = {
    2: "c",
    3: "d"
}

/**
 * We can merge one or more obectes using following method.
 */
console.log(Object.assign({}, firstobject, secondtobject));
let obj3 = {...firstobject, ...secondtobject};
console.log(obj3);

let userDeatil = {
    firstName : "Avinash",
    lastName : "Singh",
    email : "avinash@mailinator.com",
    isLoggedIn : true
}

console.log(userDeatil);

// Update any data in object
userDeatil.email = "siddharth@mailinator.com";
console.log(userDeatil);

// assign Symbol to any particular object
let mySymb = Symbol('myKey1');
userDeatil[mySymb] = "This is testing to add symbol in object";

console.log(userDeatil);

// there are two methods to call object data
console.log(userDeatil.email);
console.log(userDeatil['email']);

// add fundtion in object
userDeatil.greetings = function(){
    return this.firstName;
}

console.log(userDeatil.greetings());

// to get keys of objects
console.log(Object.keys(userDeatil));


// to get value of objects
console.log(Object.values(userDeatil));

// to freeze the object we can use below method after that user are unable to update any key value
Object.freeze(userDeatil);
userDeatil.email = 'a';
console.log(userDeatil);

// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
console.log(Object.entries(userDeatil));

// to check propery is exist in object or not
console.log(userDeatil.hasOwnProperty('isLoggedIn'))



