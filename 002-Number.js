let number = 1789456.236795;
console.log(typeof number);

// The toExponential() method in JavaScript is used to convert a number into an exponential (scientific) notation string. This method is particularly useful when you need to represent large or small numbers in a more compact form.
console.log(number.toExponential());

// The toFixed() method in JavaScript is used to format a number using fixed-point notation. It converts a number to a string, rounding to a specified number of decimal places.
console.log(number.toFixed(2));

// The toPrecision() method in JavaScript is used to format a number to a specified precision, meaning the total number of significant digits (both before and after the decimal point). The result is a string representation of the number, rounded to the desired precision.
console.log(number.toPrecision(6));

// The toLocaleString() method in JavaScript is used to convert a number (or a date) to a string, using locale-specific conventions for formatting. This method is particularly useful for formatting numbers with proper groupings, decimal points, currency symbols, and other locale-specific formatting features.
console.log(number.toLocaleString('en-IN',{ style: 'currency', currency: 'INR' }));

// convert number to string
console.log(number.toString());

console.log(number.valueOf());