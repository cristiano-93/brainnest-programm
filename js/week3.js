// Assignment 2
// a) find square diagonal

let sideLength = 9;

function findDiagonal(length) {
  return Math.sqrt(2) * length;
}
let squareDiagonal;
squareDiagonal = findDiagonal(sideLength).toFixed(3);

console.log(`Square diagonal is ${squareDiagonal}`);

// b) find triangle area

let side1 = 5,
  side2 = 6,
  side3 = 7;
let semiPerimeter = (side1 + side2 + side3) / 2;

let triangleArea = Math.sqrt(semiPerimeter * ((semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)));

console.log(`Triangle area is ${triangleArea.toFixed(3)}`);

// c) find circumference and surface area of circle

let circleRadius = 4;

function circleDiameter(radius) {
  return radius * 2;
}
let diameter = circleDiameter(circleRadius);
console.log(`The circle diameter is ${diameter}`);

function circleArea(radius) {
  return Math.PI * (radius * radius);
}
let area = circleArea(circleRadius).toFixed(3);
console.log(`The circle surface area is ${area}`);

// Assignment 3
// a) display largest of 2 integers

function largerInteger(int1, int2) {
  if (int1 > int2) {
    console.log("first number is larger");
  } else {
    console.log("second number is larger");
  }
}
// input 2 numbers and function will choose which one is higher
largerInteger(5, 8);

// b) check if number is odd or even

function isEven(number) {
  if (number % 2 == 0) {
    console.log(`The number ${number} is Even`);
  } else {
    console.log(`The number ${number} is Odd`);
  }
}
// input 1 number and function will return if its even or odd
isEven(6);

// ------ Main JavaScript Project ------

function computerPlay() {
    // random play
}
