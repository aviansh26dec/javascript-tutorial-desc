// To get the value of PI
console.log(Math.PI);

// Math.abs(x): Returns the absolute value of x
console.log(Math.abs(-4));
console.log(Math.abs(4));

// Math.sign(x): Returns the sign of x (1 if positive, -1 if negative, 0 if zero)
console.log(Math.sign(-10));
console.log(Math.sign(0));
console.log(Math.sign(10));

let values = [4,5,1,2,3];
// Math.min(...values): Returns the smallest of the given numbers.
console.log(Math.min(...values));

// Math.max(...values): Returns the largest of the given numbers.
console.log(Math.max(...values));

// Math.pow(base, exponent): Returns the base raised to the power of the exponent.
console.log(Math.pow(2, 3));

// Math.sqrt(x): Returns the square root of x.
console.log(Math.sqrt(4));

// Math.cbrt(x): Returns the cube root of x.
console.log(Math.cbrt(27));

// Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());

// Math.ceil(x): Rounds x up to the next largest integer.
console.log(Math.ceil(4.1));

// Math.floor(x): Rounds x down to the next smallest integer.
console.log(Math.floor(4.5));

// Math.trunc(x): Returns the integer part of x, removing any fractional digits.
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4




// Generate Random Number
let start = 10000;
let end = 99999;

console.log(Math.floor((Math.random() *  ((end - start) + 1)) + start));



