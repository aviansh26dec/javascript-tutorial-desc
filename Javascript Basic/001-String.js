// use strict is method to avoid using global variables

"use strict";

const userName = new String("Avinash Kumar Singh");
const userAge = 37;

// Backtrick is modern option in javascript to print the string with the variable.

console.log(`My name is ${userName} and my age is ${userAge}`);

console.log(userName.__proto__);

// Anchor function is used to add url on particular string
console.log(userName.anchor("https://avinashsingh.com"));

// ==================================

// at() method is used to get the character at the specified index.

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

// ==================================
// charAt function is used to get the character at particular index

console.log(`The character at index 4 is ${userName.charAt(4)}`);

// ==================================
// charCodeAt function is used to get the unicode of the character at particular index
console.log(
  `Character code ${userName.charCodeAt(4)} is equal to ${userName.charAt(4)}`,
);

// ==================================
// codePoint function is used to get the unicode of the character at particular index
console.log(userName.codePointAt(4));

// ==================================
// concat function is used to concat the string
console.log(userName.concat(". And my age is", userAge));

// ==================================
// The constructor method is a special method of a class for creating and initializing an object instance of that class.

class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly = new Polygon();

console.log(poly.name);

// ==================================
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

console.log(userName.endsWith("Singh"));

// ==================================
// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

console.log(userName.startsWith("Avinash"));

// ==================================
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array2 = [1, 2, 3];

console.log(`includes(): ${array2.includes(2)}`);

// ==================================
// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const animals = ["cat", "dog", "elephant", "frog", "rabbit"];

console.log(`indexOf(): ${animals.indexOf("dog")}`);

console.log(`indexOf(): ${animals.indexOf("dog", 3)}`);

console.log(`indexOf(): ${animals.indexOf("jirraf")}`);

// ==================================
// The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

// lone surrogates are not allowed in javascript. A lone surrogate is a string that contains Unicode characters in the range 0xD800–0xDBFF and 0xDC00–0xDFFF. It returns trues if the lone surrogate is not present.

console.log("<------iswellformed method start-------->");

console.log("isWellformed() : ", "😀".isWellFormed());

const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}

console.log("<-------iswellformed method end-------->");

// ==================================
// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

console.log("<-----------lastIndexOf() Start---------->");

console.log(userName.lastIndexOf("Singh"));

console.log("<-----------lastIndexOf() End---------->");

// ==================================
// length method is used to get the length of string

console.log("<-----------length Start---------->");

console.log(` Length of your name is ${userName.length}`);

console.log("<-----------length End---------->");

// ==================================
// The localeCompare() method compares two strings in the current locale.

console.log("<-----------localCompare() Start---------->");

console.log(userName.localeCompare("avinash kumar singh"));

console.log(
  userName.localeCompare("avinash kumar singh", "en", { sensitivity: "base" }),
);

console.log("<-----------localCompare() End---------->");

// ==================================
// The match() method returns an array containing the results of matching a string against a regular expression

console.log("<-----------Match Start---------->");
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
console.log("<-----------Match End---------->");

// ==================================
// normalize() method is used to normalize a string by removing all the Unicode characters that do not have a corresponding character in the current locale

console.log("<-----------Normalize Start---------->");
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

console.log(`${name1}, ${name2}`);

const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");

console.log(`${name1NFC}, ${name2NFC}`);
console.log("<-----------Normalize End---------->");
// =================================
// padEnd() method is used to pad a string to a specified length
// padStaart() method is used to pad a string to a specified length

console.log("<-----------padStart & padEnd Start---------->");
console.log(userName.padEnd(25, "."));
console.log(userName.padStart(25, "."));
console.log("<-----------padStart & padEnd End---------->");

// =================================
// repeat() method is used to repeat a string a specified number of times

console.log("<-----------repeat Start---------->");
console.log(userName.repeat(3));
console.log("<-----------repeat End---------->");

//replace(): Replaces a specified value with another value in a string.
console.log("<-----------repeat Start---------->");
console.log(userName.repeat(3));
console.log("<-----------repeat End---------->");


//replace(): Replaces a specified value with another value in a string.
console.log("<-----------replace method---------->");
let str = "Hello World";
let newStr = str.replace("World", "JavaScript");
console.log(newStr); // "Hello JavaScript"


//replaceAll(): Replaces all occurrences of a specified value with another value in a string.
console.log("<-----------replace all method---------->");
let replaeallstr = "Hello World World";
let newReplaceStr = replaeallstr.replaceAll("World", "JavaScript");
console.log(newReplaceStr); // "Hello JavaScript JavaScript"

// search(): Searches a string for a specified value and returns the position of the match.
console.log("<-----------search method---------->");
let searchStr = "Hello World";
let searchPosition = searchStr.search("World");
console.log(searchPosition); // 6

//slice(): Extracts a part of a string and returns it as a new string.
console.log("<-----------slice method---------->");
let sliceStr = "Hello World";
let slicePart = sliceStr.slice(0, 5);
console.log(slicePart); // "Hello"

//small(): Displays a string as small text (deprecated, use CSS instead).
console.log("<-----------small method---------->");
let smallStr = "Hello World";
let smallMStr = smallStr.small();
console.log(smallMStr); // "<small>Hello World</small>"

//split(): Splits a string into an array of substrings.
console.log("<-----------split method---------->");
let splitStr = "Hello World";
let splitArr = splitStr.split(" ");
console.log(splitArr); // ["Hello", "World"]

//startsWith(): Checks if a string starts with a specified value.
console.log("<-----------startsWith method---------->");
let startsWithStr = "Hello World";
let startsWithResult = startsWithStr.startsWith("Hello");
console.log(startsWithResult); // true

// strike(): Displays a string with a strikethrough (deprecated, use CSS instead).
console.log("<-----------strike method---------->");
let strikeStr = "Hello World";
let strikeMStr = strikeStr.strike();
console.log(strikeMStr); // "<strike>Hello World</strike>"

// substr(): Extracts a part of a string, starting at a specified index and extending for a given number of characters(length).
console.log("<-----------substr method---------->");
let subStr = "Hello World";
let subStrPart = subStr.substr(0, 5);
console.log(subStrPart); // "Hello"

//substring(): Extracts the characters between two specified indices in a string.
console.log("<-----------subStringStr method---------->");
let subStringStr = "Hello World";
let subStringPart = subStringStr.substring(0, 5);
console.log(subStringPart); // "Hello"

//toLocaleLowerCase(): Converts a string to lowercase according to the host's current locale.
console.log("<-----------toLocaleLowerCase method---------->");
let lowerStr = str.toLocaleLowerCase();
console.log(lowerStr); // "hello world"

//toLocaleUpperCase(): Converts a string to uppercase according to the host's current locale.
console.log("<-----------toLocaleUpperCase method---------->");
let upperStr = str.toLocaleUpperCase();
console.log(upperStr); // "hello world"

// toLowerCase(): Converts a string to lowercase.
console.log("<-----------toLowerCase method---------->");
lowerStr = str.toLowerCase();
console.log(lowerStr); // "hello world"

// toLowerCase(): Converts a string to upperstr.
console.log("<-----------toUpperCase method---------->");
upperStr = str.toUpperCase();
console.log(upperStr); // "hello world"

// toString(): Returns a string representing the specified object.
console.log("<-----------string method---------->");
let num = 123;
let numstr = num.toString();
console.log(numstr); // "123"

// toWellFormed(): Ensures a string is well-formed (correctly encoded).
console.log("<-----------toWellFormed method---------->");
let wellFormedStr = str.toWellFormed();
console.log(wellFormedStr); // "Hello World"

str = " Hello World ";
// trim(): Removes whitespace from both ends of a string.
console.log("<-----------trim method---------->");
let trimmedStr = str.trim();
console.log(trimmedStr); // "Hello World"

// trimEnd() / trimRight(): Removes whitespace from the end of a string.
console.log("<-----------trimEnd method---------->");
let trimmedEndStr = str.trimEnd();
console.log(trimmedEndStr); // "   Hello World"

// trimStart() / trimLeft(): Removes whitespace from the beginning of a string.
console.log("<-----------trimStart method---------->");
let trimmedStartStr = str.trimStart();
console.log(trimmedStartStr); // "Hello World   "

// valueOf(): Returns the primitive value of a string object.
console.log("<-----------valueOf method---------->");
let value = str.valueOf();
console.log(value); // "Hello World"


// let aaddhar_no = "123456789123";
// let aaddhar_len = aaddhar_no.length;
// let firstEight = aaddhar_no.substring(0,8);

// console.log(aaddhar_no.replace(firstEight, 'XXXXXXXX'));
