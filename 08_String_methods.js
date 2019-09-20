// Base String:
const str = "test";

// .padStart() with argument:
str.padStart(10, '~'); // '~~~~~~test'
str.padEnd(10, '~'); // 'test~~~~~~'
// .padStart() without of argument:
str.padStart(10); // '      test'
str.padEnd(10); // 'test      '


// Base String:
const str = "Hello, my name is Yauhen";

// .startsWith() using:
str.startsWith("Hello"); // true
str.startsWith("Hi"); // false
// .endsWith() using:
str.endsWith("Yauhen"); // true
str.endsWith("Jack"); // false

// Base String:
const str = "Hello, my name is Yauhen";

// The resulting string after .startsWith() is "my name is Yauhen":
str.startsWith("my", 7); // true

// The resulting string after .startsWith() is "my name is Yauhen":
str.startsWith("name", 7); // false

// The resulting string after .endsWith() is "Hello, my name":
str.endsWith("name", 14); // true

// The resulting string after .endsWith() is "Hello, my name":
str.endsWith("name", 10); // false


// Base String:
const str = "    Just test string     ";

// base string after .trim():
str.trim(); // "Just test string"


// Base String:
const str = "    Just test string     ";

// Base string after .trimStart():
str.trimStart(); // "Just test string     "

// Base string after .trimEnd():
str.trimEnd(); // "    Just test string"
