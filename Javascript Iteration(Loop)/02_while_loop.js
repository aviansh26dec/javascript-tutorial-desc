let index = 0;

while (index <= 10) {
    console.log(`Index value is ${index}`);
    index = index + 2
}

let start = 11;
do {
    console.log(`Index of start ${start}`);
    start++;
} while (start <= 10);

let map = new Map();
map.set('IN','India');
map.set('US','United States');
map.set('PAK','Pakistan');
map.set('RA','Russia');

// console.log(myObject);

/**
 * only iterate array or map data. Not an object data.
 * The JavaScript for of statement loops through the values of an iterable object.
 * It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
 */
for (const [key, value] of map) {
    console.log(`Country code of ${value} is ${key}`);    
}

/**
 * The JavaScript for in statement loops through the properties of an Object
 */
let myObject = {
    'IN' : 'India',
    'US' : 'United States',
    'PAK' : 'Pakistan',
    'RA' : 'Russia'
}
for (const key in myObject) {
    console.log(`${key}`);    
}

let myArray = [{
    'IN' : 'India',
    'US' : 'United States',
    'PAK' : 'Pakistan',
    'RA' : 'Russia'
}];

myArray.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

