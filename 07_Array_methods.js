// Base Array:
const arr = [1,2,3,4, 'five', NaN];

// Find element using .indexOf:
if(arr.indexOf(3) >= 0) {
  console.log(true); // true
}
// Find element using .includes:
if(arr.includes(3)) {
  console.log(true); // true
}


// Find NaN in Array:
const index = arr.findIndex(Number.isNaN);
console.log(index); // 5

// Difference in finding NaN in Array:
arr.indexOf(NaN); // -1
arr.includes(NaN); // true


// .flat() of 1st level:
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

// .flat() of 2nd level:
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

// .flat() of Infinity level:
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// .flat() remove empty values:
const arr5 = [1, 2, , 4, 5];
arr5.flat(); // [1, 2, 4, 5]

// .flat() remove empty values from 1st & 2nd levels of Array:
const arr6 = [1, 2, , 4, 5, [6, , 8]];
arr6.flat(); // [1, 2, 4, 5, 6, 8]


// Using of .flatMap():
const arr7 = [[1], [2], [3], [4]];
arr7.flatMap(x => [x * 2]); // [2, 4, 6, 8]
