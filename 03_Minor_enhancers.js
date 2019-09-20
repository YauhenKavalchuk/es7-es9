// Math.pow():
Math.pow(7, 2) // 49

// Exponentiation operator:
7**2 // 49
5**3 // 125
2**4 // 16

// Complecated math operation
// Old:
Math.pow(7, 2) + Math.pow(5, 3) / Math.pow(2, 4);
// New version:
7**2 + 5**3 / 2**4;
// New version with braces:
(7**2) + (5**3) / (2**4);


// Base Object:
const user = {
  firstName: "Yauhen",
  lastName: "Kavalchuk"
};

// Base function constructor:
function Person(
  name,
  age
) {
  this.name = name;
  this.age = age;
};

// Added property for Object:
const user = {
  firstName: "Yauhen",
  lastName: "Kavalchuk",
  age: 30
};

// Added argument for function constructor:
function Person(
  name,
  age,
  city
) {
  this.name = name;
  this.age = age;
  this.city = city;
};

// The same changes, but with trailing commas:
const user = {
  firstName: "Yauhen",
  lastName: "Kavalchuk",
  age: 30,
};

function Person(
  name,
  age,
  city,
) {
  this.name = name;
  this.age = age;
  this.city = city;
};
