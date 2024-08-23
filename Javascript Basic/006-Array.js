let marvel_heros = ['Iron Man','Spiderman','Captain America'];
let dc_heroes = ['Flash','Superman','Batman'];

console.log(Array.from("Avinash")); //An iterable object to convert to an array.
console.log(Array.of("Avinash","Kumar","Singh")); //Returns a new array from a set of elements.
console.log(Array.isArray("Singh"));// The Array.isArray() static method determines whether the passed value is an Array.


console.log(marvel_heros.concat(dc_heroes)); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(marvel_heros.join(dc_heroes)); //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(marvel_heros.copyWithin(0,2)); //copy the 2nd index value at 0 index

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
let itterator = marvel_heros.entries();
console.log(itterator.next());
console.log(itterator.next());
console.log(itterator.next());
console.log(itterator.next());

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;
const everyMethod = [1, 30, 39, 29, 10, 13]; 
console.log(everyMethod.every(isBelowThreshold));

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
console.log(everyMethod.fill(0,1,3)); //Fill with 0 from position 2 until position 4
console.log(everyMethod.fill(0,1)); //Fill with 0 from position 2 until end

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
let filterArray = marvel_heros.filter((str) => str.length > 10);
console.log(filterArray);

// find method used to find the element
const found = marvel_heros.find((element) => element == 'Spiderman');
console.log(found);

// findIndex method is used to find the index value of element
console.log(marvel_heros.findIndex((element) => element == 'America') > 0 ? true : false);

// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let flatMethod = [1,2,3,[4,5],[6,[7,8]]];
console.log(flatMethod.flat(Infinity));

// The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

console.log(flatMethod.flatMap((data) => data === 2 ? [100,100] : data));

// The forEach() method of Array instances executes a provided function once for each array element.
marvel_heros.forEach(data => console.log(data));

// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(marvel_heros.includes("Spiderman")); //if array exist a data than retur true else false

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(marvel_heros.indexOf("Captain America"));

// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
console.log(marvel_heros.keys("Captain America").next());

// The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
console.log(marvel_heros.lastIndexOf("Captain America"));

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log(flatMethod.map((data) => data * 2));

// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);
plants.pop();
console.log(plants);

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
marvel_heros.push("Ironman")
console.log(marvel_heros);

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
const reduceArray = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = reduceArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

// he reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
console.log(marvel_heros.reverse());

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(reduceArray.shift());
console.log(reduceArray);

// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,4));

// To sort the elements in an array without mutating the original array, use toSorted().
console.log(marvel_heros.sort());

//he splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let months = ['Jan','Mar','April','May'];
months.splice(1,0,'Feb');
console.log(months);
