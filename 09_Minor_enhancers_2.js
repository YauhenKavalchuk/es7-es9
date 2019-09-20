// Base function:
function /* just a comment */ test () {}

// Difference between old and new versions of .toString():
// Old version:
test.toString(); // 'function test() {}'
// New version:
test.toString(); // 'function /* just a comment */ test () {}'

// Base function:
function greeting() {
  const name = 'webDev';
  console.log(`hello from ${name}`);
};
// Difference between old and new versions of .toString():
// Old version:
test.toString(); //'function greeting() {\nconst name = \'webDev\'\nconsole.log(`hello from ${name} //`)\n}'
// New version:
test.toString();
/*  'function greeting() {\n' +
    "  const name = 'webDev'\n" +
    '  console.log(`hello from ${name}`)\n' +
    '}'
*/


// Symbol creation:
const mySymbol = Symbol('Symbol description');
// Define Symbol description
String(mySymbol) === 'Symbol(Symbol description)'; // true

// Define Symbol description using property description:
mySymbol.description; // 'Symbol description'
mySymbol.description === 'Symbol description'; // true

// If Symbol was created without description
// default value for property is 'undefined':
const myNewSymbol = Symbol();
myNewSymbol.description; // undefined


// Difference between old and new versions of .stringify():
// Old version:
JSON.stringify("\uD800"); // '"�"'
// New version:
JSON.stringify("\uD800"); // '"\\ud800"'
