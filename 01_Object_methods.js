// .entries() for Object:
const user = {
  firstName: "Yauhen",
  lastName: "Kavalchuk",
};

Object.entries(user); // [ [ 'firstName', "Yauhen" ], [ 'lastName', "Kavalchuk" ] ];


// .entries() for Array:
const name = ['Y', 'a', 'u', 'h', 'e', 'n'];

Object.entries(name); // [ [ '0', 'Y' ], [ '1', 'a' ], [ '2', 'u' ], [ '3', 'h' ], [ '4', 'e' ], [ '5', 'n' ] ];


// .entries() ignore Symbol key:
const admin = {
  [Symbol('password')]: '123pass',
  name: 'Yauhen',
};

Object.entries(admin); // [ [ 'name', 'Yauhen' ] ];


// .fromEntries() using:
const arr = [['one', 1], ['two', 2], ['three', 3]];

Object.fromEntries(arr); // { one: 1, two: 2, three: 3 }


// .values() using:
const user = {
  firstName: "Yauhen",
  lastName: "Kavalchuk",
};

Object.values(user); // [ "Yauhen", "Kavalchuk" ] ];
