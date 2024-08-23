/**
 * There are thre types of objects.
 * Literal Object
 * Contructor Object
 * Skelton Object
 */

/**
 * Literal Object
 * A literal object in JavaScript is the simplest way to create an object. 
 * It is defined using curly braces {} with optional properties inside.
 */

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

/**
 * Constructor Object
 * A constructor function is a way to create multiple instances of an object with the same structure.
 * It's like a blueprint for creating objects.
 */

function car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let myCar = new Car("Toyota", "Camry", 2022);
let myAnotherCar = new Car("Honda", "Civic", 2023);

// Here, the Car function acts as a constructor. The new keyword creates a new object using the constructor, and this refers to the newly created object. You can create as many Car objects as needed using the Car constructor.

/**
 * Skelton Object
 * A skeleton object refers to an object that serves as a template or structure,
 * often with default or placeholder values. This kind of object is often used as a
 * starting point for further customization.
 */

let carSkeleton = {
    brand: "",
    model: "",
    year: 0
  };
  
// Later, you can customize it:
let myCarSkelon = Object.assign({}, carSkeleton, { brand: "Toyota", model: "Camry", year: 2022 });
// In this case, carSkeleton serves as a template, and you can create a new object by copying it and then adding specific details. The Object.assign() method is used to create a new object based on the skeleton object.