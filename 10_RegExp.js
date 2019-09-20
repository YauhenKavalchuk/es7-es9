// Difference between old and new versions of 'dot' behavior:
// Old version:
/one.two/.test('one\ntwo'); // false
// New version (dotAll)
// with flag /s:
/one.two/s.test('one\ntwo'); // true


// Base RegEx to work with date:
const regEx = /(\d{4})-(\d{2})-(\d{2})/;

const result = regEx.exec('2019-08-23');

console.log(result); // ["2019-08-23", "2019", "08", "23", index: 0, input: "2019-08-23", groups: undefined]

// RegExp with named groups - (?<name>...):
const regEx = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const result = regEx.exec('2019-08-23');

console.log(result); // ["2019-08-23", "2019", "08", "23", index: 0, input: "2019-08-23", groups: {...}];

console.log(result.groups); // { year: "2019", month: "08", day: "23" }


// RegExp named groups and .replace():
const str = 'Kavalchuk Yauhen';

const repl = /(?<firstName>[A-Za-z]+) (?<lastName>[A-Za-z]+$)/u;

const newStr = str.replace(repl, '$<lastName>, $<firstName>');

console.log(newStr); // "Yauhen, Kavalchuk"


// Using named groups inside RegExp - \k<group name>:
let sameWords = /(?<fruit>apple|orange) === \k<fruit>/u;

sameWords.test('apple === apple');  //true
sameWords.test('orange === orange');  //true
sameWords.test('apple === orange');  //false


// Positive lookbehind (?<=[symbol]):
/(?<=#).*/.test('#frontend'); // true
/(?<=#).*/.test('frontend'); // false

// Difference between old and new approaches:
// Old
'#frontend'.match(/#.*/)[0]; // '#frontend'
// New
'#frontend'.match(/(?<=#).*/)[0]; // 'frontend'


// Negative lookbehind (?>![symbol]):
'course coasts $20'.match(/(?<!\$)\d+\.?\d+/) // null

'use hash-tag #20'.match(/(?<!\$)\d+\.?\d+/)[0] // 20

'email@404.com'.match(/(?<!\$)\d+\.?\d+/)[0] // 404
